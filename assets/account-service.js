// La sesión se valida con Supabase Auth; precios, promociones y pedidos se resuelven por RPC.
export function createAccountService(supabase) {
  let user = null;
  let orders = [];
  let quote = null;
  let quoteKey = '';
  let pendingQuote = null;
  let quoteGeneration = 0;

  function reset() {
    user = null;
    orders = [];
    quote = null;
    quoteKey = '';
    pendingQuote = null;
    quoteGeneration++;
  }

  async function rpc(name, args) {
    const { data, error } = await supabase.rpc(name, args);
    if (error) throw error;
    return data;
  }

  async function loadUser(authUser) {
    if (!authUser?.id || !authUser.email_confirmed_at) {
      reset();
      throw new Error('Confirma tu correo antes de iniciar sesión.');
    }
    const [profile, history] = await Promise.all([rpc('web_mi_perfil'), rpc('web_mis_pedidos')]);
    user = { ...profile, id: authUser.id, email: authUser.email };
    orders = history || [];
    quote = null;
    quoteKey = '';
    return user;
  }

  function itemsForServer(cart) {
    return cart.map(item => ({ id: String(item.id), quantity: Number(item.quantity) }));
  }

  function cartKey(cart) {
    return JSON.stringify([user?.id, itemsForServer(cart)]);
  }

  return {
    get user() { return user; },
    get orders() { return orders; },
    async restore() {
      const { data, error } = await supabase.auth.getSession();
      if (error) { reset(); throw error; }
      if (!data.session) { reset(); return null; }
      const verified = await supabase.auth.getUser();
      if (verified.error) { reset(); throw verified.error; }
      return loadUser(verified.data.user);
    },
    async signIn(email, password) {
      reset();
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      return loadUser(data.user);
    },
    async register(profile, password, welcomeOffer, emailRedirectTo) {
      // Evitar crear cuentas sin su perfil y promoción si la migración aún no se aplicó.
      await rpc('web_registro_disponible');
      const { data, error } = await supabase.auth.signUp({
        email: profile.email,
        password,
        options: { emailRedirectTo, data: {
          name: profile.name, username: profile.username, phone: profile.phone,
          docType: profile.docType, idNumber: profile.idNumber, welcome_offer: welcomeOffer === true
        } }
      });
      if (error) throw error;
      // Registrarse no inicia sesión, incluso si se desactiva la confirmación por error.
      if (data.session) {
        const result = await supabase.auth.signOut({ scope: 'local' });
        if (result.error) throw result.error;
        reset();
      }
      return data;
    },
    async signOut() {
      const { error } = await supabase.auth.signOut({ scope: 'local' });
      if (error) throw error;
      reset();
    },
    clear() { reset(); },
    quoteFor(cart) {
      return user && quoteKey === cartKey(cart) ? quote : null;
    },
    async quoteCart(cart) {
      if (!user || !cart.length) { quote = null; quoteKey = ''; return null; }
      const key = cartKey(cart);
      if (pendingQuote?.key === key) return pendingQuote.promise;
      const requestedUser = user.id;
      const generation = quoteGeneration;
      const promise = rpc('web_cotizar_carrito', { p_items: itemsForServer(cart) }).then(result => {
        if (generation === quoteGeneration && user?.id === requestedUser && key === cartKey(cart)) { quote = result; quoteKey = key; }
        return result;
      }).finally(() => { if (pendingQuote?.promise === promise) pendingQuote = null; });
      pendingQuote = { key, promise };
      return promise;
    },
    async createOrder(cart, method, requestId, pickup) {
      if (!user) throw new Error('Inicia sesión para finalizar tu pedido.');
      quoteGeneration++;
      pendingQuote = null;
      quote = null;
      quoteKey = '';
      const order = await rpc('web_crear_pedido', {
        p_items: itemsForServer(cart), p_metodo: method, p_solicitud_id: requestId, p_retiro: pickup
      });
      orders = [order, ...orders.filter(item => item.id !== order.id)];
      quote = null;
      quoteKey = '';
      return order;
    },
    async saveProfile(profile, password) {
      if (!user) throw new Error('Inicia sesión para actualizar tu cuenta.');
      const saved = await rpc('web_guardar_perfil', { p_perfil: profile });
      const emailChanged = profile.email !== user.email;
      user = { ...saved, email: user.email };
      if (emailChanged || password) {
        const changes = {};
        if (emailChanged) changes.email = profile.email;
        if (password) changes.password = password;
        const { error } = await supabase.auth.updateUser(changes);
        if (error) throw new Error(`El perfil se guardó, pero no se pudo actualizar el acceso: ${error.message}`);
      }
      return { user, emailChanged };
    }
  };
}

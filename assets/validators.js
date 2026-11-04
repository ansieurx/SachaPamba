// Validaciones de formato: no acreditan identidad ni autorización bancaria.
const text = value => String(value ?? '').trim();
const repeated = value => /^(.)\1+$/.test(value);

export function isValidCedula(value) {
  const number = text(value);
  if (!/^\d{10}$/.test(number) || repeated(number)) return false;
  const region = Number(number.slice(0, 2));
  // Mantener compatibilidad con identificadores consulares y especiales.
  if (!((region >= 1 && region <= 24) || region === 30 || region === 50) || Number(number[2]) > 6) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    const product = Number(number[i]) * (i % 2 === 0 ? 2 : 1);
    sum += product > 9 ? product - 9 : product;
  }
  return (10 - sum % 10) % 10 === Number(number[9]);
}

export function isValidPassport(value) {
  return /^(?!0+$)[A-Z0-9]{3,30}$/i.test(text(value));
}

export function documentError(type, value) {
  if (type === 'Cédula') return isValidCedula(value) ? '' : 'Ingresa una cédula válida.';
  if (type === 'Pasaporte') return isValidPassport(value) ? '' : 'Ingresa un pasaporte de 3 a 30 letras o números, sin espacios ni símbolos.';
  return 'Selecciona un tipo de documento válido.';
}

export function isValidRuc(value) {
  const number = text(value);
  if (!/^\d{13}$/.test(number) || repeated(number) || number.endsWith('000')) return false;
  const third = Number(number[2]);
  if (third <= 5) return isValidCedula(number.slice(0, 10));
  // El SRI no exige un algoritmo verificador a todos los RUC de sociedades.
  return third === 6 || third === 9;
}

export function isValidEmail(value) {
  const email = text(value);
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(value) {
  const phone = text(value);
  const digits = phone.replace(/\D/g, '');
  return /^\+?[0-9 ()-]+$/.test(phone) && digits.length >= 9 && digits.length <= 15 && !/^0+$/.test(digits);
}

export function nameError(value) {
  const name = text(value);
  return name.length >= 3 && name.length <= 150 && /\p{L}/u.test(name) && !/[\u0000-\u001f\u007f]/.test(name)
    ? '' : 'Ingresa un nombre de 3 a 150 caracteres, con letras y sin caracteres de control.';
}

export function profileErrors(profile) {
  const errors = {};
  if (nameError(profile.name)) errors.name = nameError(profile.name);
  if (!isValidEmail(profile.email)) errors.email = 'Ingresa un correo electrónico válido.';
  if (!isValidPhone(profile.phone)) errors.phone = 'Ingresa un teléfono válido, con entre 9 y 15 dígitos y sin letras.';
  const error = documentError(profile.docType, profile.idNumber);
  if (error) errors.idNumber = error;
  if (text(profile.username).length > 60 || /[\u0000-\u001f\u007f]/.test(text(profile.username))) errors.username = 'El usuario admite hasta 60 caracteres, sin caracteres de control.';
  return errors;
}

export function assertValidProfile(profile) {
  const error = Object.values(profileErrors(profile))[0];
  if (error) throw new Error(error);
}

export function isValidCardNumber(value) {
  const raw = text(value);
  if (!/^[0-9 -]+$/.test(raw)) return false;
  const number = raw.replace(/[ -]/g, '');
  if (!/^\d{12,19}$/.test(number) || repeated(number)) return false;
  let sum = 0;
  let double = false;
  for (let i = number.length - 1; i >= 0; i--, double = !double) {
    let digit = Number(number[i]);
    if (double) { digit *= 2; if (digit > 9) digit -= 9; }
    sum += digit;
  }
  return sum % 10 === 0;
}

export function isValidCardExpiry(value, now = new Date()) {
  const match = text(value).match(/^(\d{2})\s*\/\s*(\d{2}|\d{4})$/);
  if (!match) return false;
  const month = Number(match[1]);
  const year = match[2].length === 2 ? 2000 + Number(match[2]) : Number(match[2]);
  return month >= 1 && month <= 12 && (year > now.getFullYear() || (year === now.getFullYear() && month >= now.getMonth() + 1));
}

export function isValidCvv(value, cardNumber) {
  const number = text(cardNumber).replace(/[ -]/g, '');
  return /^3[47]\d{13}$/.test(number) ? /^\d{4}$/.test(text(value)) : /^\d{3}$/.test(text(value));
}

export function checkoutDocumentType(value, user) {
  if (text(value) === text(user?.idNumber) && ['Cédula', 'Pasaporte'].includes(user?.docType)) return user.docType;
  return /^\d{10}$/.test(text(value)) ? 'Cédula' : 'Pasaporte';
}

export function billingDocumentError(value, user) {
  if (user?.docType === 'Pasaporte' && text(value).toUpperCase() === text(user.idNumber).toUpperCase()) return documentError('Pasaporte', value);
  return isValidCedula(value) || isValidRuc(value) ? '' : 'Ingresa una cédula válida o un RUC válido de 13 dígitos.';
}

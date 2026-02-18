import countries from "./Countries.js";

// Get full country object by alpha-2 code
function getByCode2(code2) {
  if (!code2) return null;
  return countries.find(c => c.code2.toLowerCase() === code2.toLowerCase()) || null;
}

// Get full country object by alpha-3 code
function getByCode3(code3) {
  if (!code3) return null;
  return countries.find(c => c.code3.toLowerCase() === code3.toLowerCase()) || null;
}

// Get full country object by full name
function getByName(name) {
  if (!name) return null;
  return countries.find(c => c.name.toLowerCase() === name.toLowerCase()) || null;
}

// Get by dial code
function getByDialCode(dial) {
  if (!dial) return null;
  return countries.find(c => c.dial === dial) || null;
}

// Shorthand helpers
function getCountryName(code2) {
  const c = getByCode2(code2);
  return c ? c.name : null;
}

function getCountryCode(name) {
  const c = getByName(name);
  return c ? c.code2 : null;
}

function getDialCode(code2) {
  const c = getByCode2(code2);
  return c ? c.dial : null;
}

/* =========================
   NAMED EXPORTS
========================= */
export {
  getByCode2,
  getByCode3,
  getByName,
  getByDialCode,
  getCountryName,
  getCountryCode,
  getDialCode,
  countries
};

/* =========================
   DEFAULT EXPORT (RN Friendly)
========================= */
export default {
  getByCode2,
  getByCode3,
  getByName,
  getByDialCode,
  getCountryName,
  getCountryCode,
  getDialCode,
  countries
};

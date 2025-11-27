import { useEffect } from "react";
import countries from "./countries.js";

// Named exports
export function getByCode2(code2) {
  if (!code2) return null;
  return countries.find(c => c.code2.toLowerCase() === code2.toLowerCase()) || null;
}

export function getByCode3(code3) {
  if (!code3) return null;
  return countries.find(c => c.code3.toLowerCase() === code3.toLowerCase()) || null;
}

export function getByName(name) {
  if (!name) return null;
  return countries.find(c => c.name.toLowerCase() === name.toLowerCase()) || null;
}

export function getByDialCode(dial) {
  if (!dial) return null;
  return countries.find(c => c.dial === dial) || null;
}

export function getCountry(input) {
  if (!input) return null;

  input = input.trim();

  // 2-letter code
  let country = countries.find(c => c.code2.toLowerCase() === input.toLowerCase());
  if (country) return country.name;

  // 3-letter code
  country = countries.find(c => c.code3.toLowerCase() === input.toLowerCase());
  if (country) return country.name;

  // Full name
  country = countries.find(c => c.name.toLowerCase() === input.toLowerCase());
  if (country) return country.code2;

  return null;
}

export function getDialCode(code2) {
  const c = getByCode2(code2);
  return c ? c.dial : null;
}


export { countries };

// Default export (for React Native / Metro)
export default {
  getByCode2,
  getByCode3,
  getByName,
  getByDialCode,
  getCountry,
  getDialCode,
  countries,
};

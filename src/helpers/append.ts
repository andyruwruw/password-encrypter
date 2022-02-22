// Local Imports
import {
  APPEND_LOWERCASE_LETTER_OFFSET,
  APPEND_LOWERCASE_LETTER_RANGE,
  SPECIAL_CHARACTERS,
} from '../config';

/**
 * Adds digits to string.
 *
 * @param {string} string String to add to.
 * @param {number} number Number to add.
 * @returns {string} String with numbers.
 */
export const appendDigit = (
  string: string,
  number: number,
): string => `${string}${number}`;

/**
 * Adds lowercase letters to string.
 *
 * @param {string} string String to add to.
 * @param {number} number Seed.
 * @returns {string} String with lowercase letters.
 */
export const appendLowercaseLetter = (
  string: string,
  number: number,
): string => {
  const rangedSeed = number % APPEND_LOWERCASE_LETTER_RANGE;
  const char = String.fromCharCode(rangedSeed + APPEND_LOWERCASE_LETTER_OFFSET);
  return `${string}${char}`;
};

/**
 * Adds special characters to string.
 *
 * @param {string} string String to add to.
 * @param {number} number Seed.
 * @returns {string} String with special characters.
 */
export const appendSpecialCharacter = (
  string: string,
  number: number,
): string => {
  const specialChar = SPECIAL_CHARACTERS[number % SPECIAL_CHARACTERS.length];
  return `${string}${specialChar}`;
};

/**
 * Adds uppercase letters to string.
 *
 * @param {string} string String to add to.
 * @param {number} number Seed.
 * @returns {string} String with uppercase letters.
 */
export const appendUppercaseLetter = (
  string: string,
  number: number,
): string => {
  const char = String.fromCharCode((number % 27) + 65);
  return `${string}${char}`;
};

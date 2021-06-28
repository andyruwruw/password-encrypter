import {
  DIGIT,
  LOWERCASE_LETTER,
  SPECIAL_CHARACTER,
  UPPERCASE_LETTER,
} from './constants';

/**
 * Whether string has digits
 *
 * @param {string} string The string to test
 * @returns Whether it has digits
 */
export function hasDigits(string: string): boolean {
  return DIGIT.test(string);
}

/**
 * Whether string has lowercase letters
 *
 * @param {string} string The string to test
 * @returns Whether it has lowercase letters
 */
export function hasLowercaseLetters(string: string): boolean {
  return LOWERCASE_LETTER.test(string);
}

/**
 * Whether string has special characters
 *
 * @param {string} string The string to test
 * @returns Whether it has special characters
 */
export function hasSpecialCharacters(string: string): boolean {
  return SPECIAL_CHARACTER.test(string);
}

/**
 * Whether string has uppercase letters
 *
 * @param {string} string The string to test
 * @returns Whether it has uppercase letters
 */
export function hasUppercaseLetters(string: string): boolean {
  return UPPERCASE_LETTER.test(string);
}

// Local Imports
import {
  REGEX_DIGIT,
  REGEX_LOWERCASE_LETTER,
  REGEX_SPECIAL_CHARACTER,
  REGEX_UPPERCASE_LETTER,
} from '../config';

/**
 * Whether string has digits.
 *
 * @param {string} string The string to test.
 * @returns {boolean} Whether it has digits.
 */
export const hasDigits = (string: string): boolean => REGEX_DIGIT.test(string);

/**
 * Whether string has lowercase letters.
 *
 * @param {string} string The string to test.
 * @returns {boolean} Whether it has lowercase letters.
 */
export const hasLowercaseLetters = (string: string): boolean => REGEX_LOWERCASE_LETTER.test(string);

/**
 * Whether string has special characters.
 *
 * @param {string} string The string to test.
 * @returns {boolean} Whether it has special characters.
 */
export const hasSpecialCharacters = (string: string): boolean => (
  REGEX_SPECIAL_CHARACTER.test(string)
);

/**
 * Whether string has uppercase letters.
 *
 * @param {string} string The string to test.
 * @returns {boolean} Whether it has uppercase letters.
 */
export const hasUppercaseLetters = (string: string): boolean => REGEX_UPPERCASE_LETTER.test(string);

import { SHA256 } from './hash';
import { insert, offset } from './shuffle';
import { intFromString } from './process';
import {
  hasDigits,
  hasLowercaseLetters,
  hasSpecialCharacters,
  hasUppercaseLetters,
} from './validators';
import {
  appendDigit,
  appendLowercaseLetter,
  appendSpecialCharacter,
  appendUppercaseLetter,
} from './append';

/**
 * Hashes a set of strings
 * @param {string} base Base
 * @param {string} secondary Secondary
 * @param {number} integer Integer
 * @param {string} key Key
 * @returns {string} Hashed string
 */
export function encrypt(base: string, secondary: string, integer: number, key: string): string {
  const prepared = insert(insert(base, secondary, integer), key, intFromString(key));
  const hashed = offset(SHA256(prepared), intFromString(secondary));
  let result = hashed.substring(0, 16);

  let failedChecks = 0;

  if (!hasDigits(result)) {
    result = appendDigit(result, intFromString(result));
    result = offset(result, intFromString(result));
    failedChecks += 1;
  }

  if (!hasSpecialCharacters(result)) {
    result = appendSpecialCharacter(result, intFromString(result));
    result = offset(result, intFromString(result));
    failedChecks += 5;
  }

  if (!hasLowercaseLetters(result)) {
    result = appendLowercaseLetter(result, intFromString(result));
    result = offset(result, intFromString(result));
    failedChecks += 10;
  }

  if (!hasUppercaseLetters(result)) {
    result = appendUppercaseLetter(result, intFromString(result));
    result = offset(result, intFromString(result));
    failedChecks += 15;
  }

  return offset(result, failedChecks);
}

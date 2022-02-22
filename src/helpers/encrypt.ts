// Packages
import jsonwebtoken from 'jsonwebtoken';

// Local Imports
import {
  appendDigit,
  appendLowercaseLetter,
  appendSpecialCharacter,
  appendUppercaseLetter,
} from './append';
import {
  hasDigits,
  hasLowercaseLetters,
  hasSpecialCharacters,
  hasUppercaseLetters,
} from './validators';
import {
  insert,
  offset,
} from './shuffle';
import {
  FAILED_CHECK_ADDITIONS,
  MAX_HASH_LENGTH,
} from '../config';
import { intFromString } from './process';
import { SHA256 } from './hash';

/**
 * Hashes a set of strings.
 *
 * @param {string} base Base.
 * @param {string} secondary Secondary.
 * @param {number} integer Integer.
 * @param {string} key Key.
 * @returns {string} Hashed string.
 */
export const generatePassword = (
  base: string,
  secondary: string,
  integer: number,
  key: string,
): string => {
  const prepared = insert(
    insert(
      base,
      secondary,
      integer,
    ),
    key,
    intFromString(key),
  );

  const hashed = offset(
    SHA256(prepared),
    intFromString(secondary),
  );
  let result = hashed.substring(
    0,
    MAX_HASH_LENGTH,
  );

  let failedChecks = 0;

  if (!hasDigits(result)) {
    result = appendDigit(
      result,
      intFromString(result),
    );
    result = offset(
      result,
      intFromString(result),
    );
    failedChecks += FAILED_CHECK_ADDITIONS[0];
  }

  if (!hasSpecialCharacters(result)) {
    result = appendSpecialCharacter(
      result,
      intFromString(result),
    );
    result = offset(
      result,
      intFromString(result),
    );
    failedChecks += FAILED_CHECK_ADDITIONS[1];
  }

  if (!hasLowercaseLetters(result)) {
    result = appendLowercaseLetter(
      result,
      intFromString(result),
    );
    result = offset(
      result,
      intFromString(result),
    );
    failedChecks += FAILED_CHECK_ADDITIONS[2];
  }

  if (!hasUppercaseLetters(result)) {
    result = appendUppercaseLetter(
      result,
      intFromString(result),
    );
    result = offset(
      result,
      intFromString(result),
    );
    failedChecks += FAILED_CHECK_ADDITIONS[3];
  }

  return offset(result, failedChecks);
};

/**
 * Encrypts data with password as key.
 *
 * @param {string} base Base.
 * @param {string} secondary Secondary.
 * @param {number} integer Integer.
 * @param {string} key Key.
 * @param {string} data Data to encrypt.
 * @returns {string} Encrypted data.
 */
export function encrypt(
  base: string,
  secondary: string,
  integer: number,
  key: string,
  data: string,
): string {
  const secret = generatePassword(
    base,
    secondary,
    integer,
    key,
  );

  return jsonwebtoken.sign(
    { data },
    secret,
  );
}

/**
 * Decrypts data with password as key.
 *
 * @param {string} base Base.
 * @param {string} secondary Secondary.
 * @param {number} integer Integer.
 * @param {string} key Key.
 * @param {string} data Data to decrypt.
 * @returns {string} Decrypted data.
 */
export function decrypt(
  base: string,
  secondary: string,
  integer: number,
  key: string,
  data: string,
): string {
  const secret = generatePassword(
    base,
    secondary,
    integer,
    key,
  );

  const decrypted = jsonwebtoken.verify(
    data,
    secret,
  ) as Record<string, string>;

  if ('data' in decrypted) {
    return decrypted.data;
  }
  return '';
}

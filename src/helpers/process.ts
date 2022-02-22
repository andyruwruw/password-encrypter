// Local Imports
import { MAX_INT_FROM_STRING } from '../config';

/**
 * Returns a number from a string.
 *
 * @param {string} string String to convert.
 * @returns {number} number from string.
 */
export function intFromString(string: string): number {
  let result = 0;

  for (let i = 0; i < string.length; i += 1) {
    result += string.charCodeAt(i);
    result %= MAX_INT_FROM_STRING;
  }

  return result;
}

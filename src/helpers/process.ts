/**
 * Returns a number from a string
 *
 * @param {string} string String to convert
 * @returns {number} number from string
 */
export function intFromString(string: string): number {
  let result = 0;
  for (let i = 0; i < string.length; i += 1) {
    result += string.charCodeAt(i);
    result %= 20;
  }
  return result;
}

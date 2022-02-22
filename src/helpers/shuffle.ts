/**
 * Returns a string offset.
 *
 * @param {string} string String to offset.
 * @param {number} integer How much to offset.
 * @returns {string} Offset String.
 */
export function offset(
  string: string,
  integer: number,
): string {
  const firstPiece = string.substring(integer % string.length);
  const lastPiece = integer !== 0 ? string.substring(0, (integer % string.length)) : '';
  return `${firstPiece}${lastPiece}`;
}

/**
 * Inserts a string into another string.
 *
 * @param {string} string String to insert into.
 * @param {string} piece String to insert.
 * @param {number} integer Where to insert the string.
 * @returns {string} Strings combined.
 */
export function insert(
  string: string,
  piece: string,
  integer: number,
): string {
  const firstPiece = string.substring((integer + integer) % string.length);
  const lastPiece = (integer + integer) !== 0 ? string.substring(0, ((integer + integer) % string.length)) : '';
  return `${firstPiece}${piece}${lastPiece}`;
}

/**
 * Returns a string offset
 *
 * @param {string} string String to offset
 * @param {number} integer How much to offset
 * @returns {string} Offset String
 */
export function offset(string: string, integer: number): string {
  return `${string.substring(integer % string.length)}${integer !== 0 ? string.substring(0, (integer % string.length)) : ''}`;
}

export function insert(string: string, piece: string, integer: number): string {
  return `${string.substring((integer + integer) % string.length)}${piece}${(integer + integer) !== 0 ? string.substring(0, ((integer + integer) % string.length)) : ''}`;
}

/**
 * Adds digits to string
 *
 * @param {string} string String to add to
 * @param {number} number Number to add
 * @returns {string} String with numbers
 */
export function appendDigit(string: string, number: number): string {
  return `${string}${number}`;
}

/**
 * Adds lowercase letters to string
 *
 * @param {string} string String to add to
 * @param {number} number Seed
 * @returns {string} String with lowercase letters
 */
export function appendLowercaseLetter(string: string, number: number): string {
  const char = String.fromCharCode((number % 27) + 97);
  return `${string}${char}`;
}

/**
 * Adds special characters to string
 *
 * @param {string} string String to add to
 * @param {number} number Seed
 * @returns {string} String with special characters
 */
export function appendSpecialCharacter(string: string, number: number): string {
  const SPECIAL_CHARACTERS = ['!', '?', '#', '@'];
  return `${string}${SPECIAL_CHARACTERS[number % SPECIAL_CHARACTERS.length]}`;
}

/**
 * Adds uppercase letters to string
 *
 * @param {string} string String to add to
 * @param {number} number Seed
 * @returns {string} String with uppercase letters
 */
export function appendUppercaseLetter(string: string, number: number): string {
  const char = String.fromCharCode((number % 27) + 65);
  return `${string}${char}`;
}

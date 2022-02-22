/**
 * Regular expression for identifying digits.
 */
export const REGEX_DIGIT = /\d+/;

/**
 * Regular expression for identifying lowercase letters.
 */
export const REGEX_LOWERCASE_LETTER = /[a-z]+/;

/**
 * Regular expression for identifying special characters.
 */
export const REGEX_SPECIAL_CHARACTER = /[!@#?]+/;

/**
 * Regular expression for identifying uppercase letters.
 */
export const REGEX_UPPERCASE_LETTER = /[A-Z]+/;

/**
 * Range of lower case letter placement.
 */
export const APPEND_LOWERCASE_LETTER_RANGE = 27;

/**
 * Offset of lower case letter placement.
 */
export const APPEND_LOWERCASE_LETTER_OFFSET = 97;

/**
 * Max hash length.
 */
export const MAX_HASH_LENGTH = 16;

/**
 * Max number returned from string.
 */
export const MAX_INT_FROM_STRING = 20;

/**
 * Amount added to failed check on each iteration.
 */
export const FAILED_CHECK_ADDITIONS = [
  1,
  5,
  10,
  15,
];

/**
 * List of special characters to add variety.
 */
export const SPECIAL_CHARACTERS = [
  '!',
  '?',
  '#',
  '@',
];

/*
 * action types
 */

export const COUNT_UP = 'COUNT_UP'

/*
 * action creators
 */

export function countUp(text) {
  return { type: COUNT_UP, text }
}

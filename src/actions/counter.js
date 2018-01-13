/*
 * action types
 */

export const COUNT_UP = 'COUNT_UP'
export const COUNT_DOWN = 'COUNT_DOWN'

/*
 * action creators
 */

export function countUp() {
  return { type: COUNT_UP }
}

export function countDown() {
  return { type: COUNT_DOWN }
}

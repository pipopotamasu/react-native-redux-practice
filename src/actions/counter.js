/*
 * action types
 */

export const COUNT_UP = 'COUNT_UP'
export const COUNT_DOWN = 'COUNT_DOWN'
export const INPUT_COUNT = 'INPUT_COUNT'

/*
 * action creators
 */

export function countUp() {
  return { type: COUNT_UP }
}

export function countDown() {
  return { type: COUNT_DOWN }
}

export function inputCount(count) {
  return { type: COUNT_DOWN, count: count }
}

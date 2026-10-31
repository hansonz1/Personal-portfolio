import assert from 'node:assert/strict'
import { test } from 'node:test'
import { getCenteredOffset } from './carouselPosition.js'

test('all real cards stay centered with only existing neighbors visible', () => {
  const viewport = 1200
  const width = 928
  const gap = 24
  for (const count of [1, 2, 4, 7]) {
    for (let index = 0; index < count; index += 1) {
      const left = index * (width + gap)
      const offset = getCenteredOffset(left, width, viewport)
      assert.equal(left - offset + width / 2, viewport / 2)
      const visible = Array.from({length:count}, (_,i) => i).filter(i => {
        const cardLeft = i * (width + gap) - offset
        return cardLeft < viewport && cardLeft + width > 0
      })
      assert.deepEqual(visible, [index - 1, index, index + 1].filter(i => i >= 0 && i < count))
    }
  }
})

test('first and last cards have equal margins without invented neighbors', () => {
  assert.equal(getCenteredOffset(0, 928, 1200), -136)
  assert.equal(getCenteredOffset(3 * 952, 928, 1200), 2720)
})

test('full-width mobile and single-slide layouts keep all content readable', () => {
  for (const width of [272, 688, 896]) {
    for (let i = 0; i < 4; i += 1) {
      assert.equal(getCenteredOffset(i * (width + 24), width, width), i * (width + 24))
    }
    assert.equal(getCenteredOffset(0, width, width), 0)
  }
})

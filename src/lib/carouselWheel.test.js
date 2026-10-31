import assert from 'node:assert/strict'
import { test } from 'node:test'
import { attachCarouselWheel } from './carouselWheel.js'

function setup(t, onStep) {
  const listeners = new Map()
  let time = 0
  const pause = (milliseconds) => { time += milliseconds }
  const steps = []
  const area = {
    getBoundingClientRect: () => ({ left: 20, right: 320, top: 20, bottom: 220, width: 300, height: 200 }),
    addEventListener: (name, handler, options) => listeners.set(name, { handler, options }),
    removeEventListener: (name, handler) => {
      assert.equal(listeners.get(name).handler, handler)
      listeners.delete(name)
    },
  }
  const detach = attachCarouselWheel(area, onStep ?? ((direction) => steps.push(direction)))
  let attached = true
  const cleanup = () => {
    if (!attached) return
    attached = false
    detach()
  }
  t.after(cleanup)
  function wheel(overrides = {}) {
    time += 16
    const event = {
      timeStamp: time,
      deltaX: 0, deltaY: 0, deltaMode: 0, clientX: 100, clientY: 100,
      ctrlKey: false, defaultPrevented: false,
      preventDefault: () => assert.fail('Native wheel behavior must not be cancelled'),
      ...overrides,
    }
    listeners.get('wheel')?.handler(event)
  }
  return { wheel, steps, listeners, pause, cleanup }
}

test('accumulates intentional horizontal movement and supports both directions', (t) => {
  const { wheel, steps, listeners, pause } = setup(t)
  assert.equal(listeners.get('wheel').options.passive, true)
  wheel({ deltaX: 20, deltaY: 2 })
  wheel({ deltaX: 19, deltaY: 2 })
  assert.deepEqual(steps, [])
  wheel({ deltaX: 1, deltaY: 2 })
  assert.deepEqual(steps, [1])
  pause(160)
  wheel({ deltaX: -40 })
  assert.deepEqual(steps, [1, -1])
})

test('sparse decaying momentum, late spikes, and reversals stay in one gesture', (t) => {
  const { wheel, steps, pause } = setup(t)
  wheel({ deltaX: 90 })
  for (const deltaX of [60, 30, 12, 5, 1]) {
    pause(200)
    wheel({ deltaX })
  }
  wheel({ deltaX: -90 })
  wheel({ deltaX: -100 })
  assert.deepEqual(steps, [1])
  pause(600)
  wheel({ deltaX: 90 })
  assert.deepEqual(steps, [1, 1])
})

test('vertical, diagonal, and zoom gestures do not navigate or block defaults', (t) => {
  const { wheel, steps, pause } = setup(t)
  wheel({ deltaX: 3, deltaY: 40 })
  wheel({ deltaX: 100, deltaY: 0 })
  assert.deepEqual(steps, [])
  pause(160)
  wheel({ deltaX: 90, deltaY: 80 })
  assert.deepEqual(steps, [])
  pause(160)
  wheel({ deltaX: 100, ctrlKey: true })
  wheel({ deltaX: 100 })
  assert.deepEqual(steps, [])
})

test('ignores latched events outside the carousel and events already consumed by children', (t) => {
  const { wheel, steps, pause } = setup(t)
  wheel({ deltaX: 100, clientX: 500 })
  wheel({ deltaX: 100 })
  assert.deepEqual(steps, [])
  pause(160)
  wheel({ deltaX: 100, defaultPrevented: true })
  assert.deepEqual(steps, [])
})

test('normalizes line and page units', (t) => {
  const { wheel, steps, pause } = setup(t)
  wheel({ deltaX: 5, deltaMode: 1 })
  assert.deepEqual(steps, [1])
  pause(160)
  wheel({ deltaX: -1, deltaMode: 2 })
  assert.deepEqual(steps, [1, -1])
})

test('outward boundary input stays native and cannot reverse direction in the same gesture', (t) => {
  let index = 0
  const { wheel, pause } = setup(t, (direction) => {
    index = Math.max(0, Math.min(index + direction, 3))
  })
  wheel({ deltaX: -100 })
  assert.equal(index, 0)
  wheel({ deltaX: 100 })
  assert.equal(index, 0)
  for (let i = 0; i < 3; i += 1) {
    pause(160)
    wheel({ deltaX: 100 })
  }
  assert.equal(index, 3)
  pause(160)
  wheel({ deltaX: 100 })
  assert.equal(index, 3)
})

test('cleanup removes the listener without leaving gesture timers', (t) => {
  t.mock.method(globalThis, 'setTimeout', () => assert.fail('No gesture timer should be scheduled'))
  const { wheel, steps, listeners, cleanup } = setup(t)
  wheel({deltaX:20})
  cleanup()
  assert.equal(listeners.size, 0)
  wheel({deltaX:100})
  assert.deepEqual(steps, [])
})

test('separate bursts do not combine subthreshold movement', (t) => {
  const { wheel, steps, pause } = setup(t)
  wheel({ deltaX: 25 })
  pause(160)
  wheel({ deltaX: 25 })
  assert.deepEqual(steps, [])
  wheel({ deltaX: 15 })
  assert.deepEqual(steps, [1])
})

test('leaving the interaction area discards the rest of that gesture', (t) => {
  const { wheel, steps, pause } = setup(t)
  wheel({ deltaX: 25 })
  wheel({ deltaX: 10, clientY: 300 })
  wheel({ deltaX: 100 })
  assert.deepEqual(steps, [])
  pause(160)
  wheel({ deltaX: 40 })
  assert.deepEqual(steps, [1])
})

test('each carousel has an independent gesture history and listener', (t) => {
  const first = setup(t)
  const second = setup(t)
  first.wheel({deltaX:40})
  first.wheel({deltaX:100})
  second.wheel({deltaX:40})
  assert.deepEqual(first.steps, [1])
  assert.deepEqual(second.steps, [1])
  second.pause(160)
  second.wheel({deltaX:40})
  assert.deepEqual(second.steps, [1, 1])
})

test('rapid packets do not cascade, but a separate burst needs no 350ms wait', (t) => {
  const {wheel, steps, pause} = setup(t)
  for (let i = 0; i < 12; i += 1) wheel({deltaX:40})
  assert.deepEqual(steps, [1])
  pause(160)
  wheel({deltaX:40})
  assert.deepEqual(steps, [1, 1])
})

test('sustained renewed acceleration after a low-energy tail starts a fresh swipe', (t) => {
  const {wheel, steps} = setup(t)
  for (const x of [80, 60, 35, 15, 5, 1]) wheel({deltaX:x})
  assert.deepEqual(steps, [1])
  wheel({deltaX:4})
  wheel({deltaX:12})
  assert.deepEqual(steps, [1])
  wheel({deltaX:28})
  assert.deepEqual(steps, [1, 1])
})

test('isolated momentum bumps and low-amplitude noise cannot rearm navigation', (t) => {
  const {wheel, steps} = setup(t)
  for (const x of [80, 60, 35, 15, 5, 1, 20, 1, 4, 1, 2, 3, 4]) wheel({deltaX:x})
  assert.deepEqual(steps, [1])
})

test('burst separation adapts to fast and slow packet cadence', (t) => {
  const fast = setup(t)
  const slow = setup(t)
  let fastTime = 0
  let slowTime = 0
  for (let i = 0; i < 25; i += 1) {
    fast.wheel({deltaX:40, timeStamp: fastTime += 8})
    slow.wheel({deltaX:40, timeStamp: slowTime += 32})
  }
  fast.wheel({deltaX:40, timeStamp: fastTime + 100})
  slow.wheel({deltaX:40, timeStamp: slowTime += 100})
  assert.deepEqual(fast.steps, [1, 1])
  assert.deepEqual(slow.steps, [1])
  slow.wheel({deltaX:40, timeStamp: slowTime + 300})
  assert.deepEqual(slow.steps, [1, 1])
})

test('a renewed reverse swipe requires sustained acceleration and 40px total', (t) => {
  const {wheel, steps} = setup(t)
  for (const x of [80, 60, 35, 15, 5, 1, -4, -12, -23]) wheel({deltaX:x})
  assert.deepEqual(steps, [1])
  wheel({deltaX:-30})
  assert.deepEqual(steps, [1, -1])
})

test('a deliberate two-packet follow-up swipe can resume without a cooldown', (t) => {
  const {wheel, steps} = setup(t)
  for (const x of [80, 60, 35, 15, 5, 1]) wheel({deltaX:x})
  wheel({deltaX:8})
  assert.deepEqual(steps, [1])
  wheel({deltaX:32})
  assert.deepEqual(steps, [1, 1])
  for (const x of [25, 12, 6, 2, 1, 18, 1]) wheel({deltaX:x})
  assert.deepEqual(steps, [1, 1])
})

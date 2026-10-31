const MOVEMENT_THRESHOLD = 40
const AXIS_RATIO = 1.5

/** Local, passive wheel handling. WheelEvent exposes no portable gesture phases. */
export function attachCarouselWheel(element, onStep) {
  let lastTime = null
  let cadence = 16
  let deltaX = 0
  let verticalMovement = 0
  let locked = false
  let ignored = false
  let previousMagnitude = 0
  let peak = 0
  let decliningPackets = 0
  let tailReady = false
  let trough = Infinity
  let risingPackets = 0
  let risingDistance = 0
  let risingVertical = 0
  let risingDirection = 0

  function resetGesture() {
    deltaX = 0
    verticalMovement = 0
    locked = false
    ignored = false
    previousMagnitude = 0
    peak = 0
    decliningPackets = 0
    tailReady = false
    trough = Infinity
    risingPackets = 0
    risingDistance = 0
    risingVertical = 0
    risingDirection = 0
  }

  function handleWheel(event) {
    const rect = element.getBoundingClientRect()
    const xUnit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? rect.width : 1
    const yUnit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? rect.height : 1
    const x = event.deltaX * xUnit
    const y = Math.abs(event.deltaY * yUnit)
    const magnitude = Math.abs(x)
    const horizontal = magnitude > y * AXIS_RATIO
    const now = event.timeStamp
    const gap = lastTime === null ? Infinity : Math.max(0, now - lastTime)

    // Detect separated bursts from the device's recent packet cadence, rather
    // than a fixed quiet-period timer. Sparse, decaying tails remain consumed.
    const decayingTail = locked && !ignored && horizontal &&
      Math.sign(x) === Math.sign(deltaX) && magnitude < previousMagnitude * 0.9 &&
      gap <= cadence * 24
    if (gap > cadence * 8 && !decayingTail) resetGesture()
    if (gap > 0 && gap < cadence * 3) {
      cadence = Math.max(8, Math.min(40, cadence * 0.8 + gap * 0.2))
    }
    lastTime = now

    const previous = previousMagnitude
    previousMagnitude = magnitude
    peak = Math.max(peak, magnitude)

    // Browsers may latch packets to the initial target after the pointer leaves.
    if (event.ctrlKey || event.defaultPrevented ||
        event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) {
      ignored = true
    }
    if (ignored) return

    if (locked) {
      decliningPackets = magnitude < previous * 0.9 ? decliningPackets + 1 : 0
      if (decliningPackets >= 3 && magnitude <= peak * 0.25) tailReady = true
      if (tailReady) trough = Math.min(trough, magnitude)

      // A single late momentum spike or reversal is insufficient. Require
      // two rising horizontal packets totaling 40px after a low-energy tail.
      const direction = Math.sign(x)
      if (tailReady && horizontal && magnitude >= 2 && magnitude > previous * 1.2 &&
          (risingPackets === 0 || direction === risingDirection)) {
        risingPackets += 1
        risingDistance += magnitude
        risingVertical += y
        risingDirection = direction
      } else {
        risingPackets = 0
        risingDistance = 0
        risingVertical = 0
      }
      if (risingPackets < 2 || risingDistance < MOVEMENT_THRESHOLD ||
          magnitude < 12 || magnitude < trough * 3) return

      // Seed the new gesture with its confirmed acceleration, retaining 40px
      // accumulation rather than navigating on every wheel packet.
      const renewedX = risingDirection * risingDistance
      const renewedY = risingVertical
      resetGesture()
      deltaX = renewedX
      verticalMovement = renewedY
      previousMagnitude = magnitude
      peak = magnitude
    } else {
      deltaX += x
      verticalMovement += y
    }

    if (verticalMovement >= 12 && verticalMovement > Math.abs(deltaX) * AXIS_RATIO) {
      ignored = true
      return
    }
    if (Math.abs(deltaX) >= MOVEMENT_THRESHOLD &&
        Math.abs(deltaX) > verticalMovement * AXIS_RATIO) {
      locked = true
      onStep(deltaX > 0 ? 1 : -1)
    }
  }

  element.addEventListener('wheel', handleWheel, { passive: true })
  return () => element.removeEventListener('wheel', handleWheel)
}

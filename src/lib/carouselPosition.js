/** Center the real card, including endpoints; no clones or imaginary neighbors. */
export function getCenteredOffset(cardLeft, cardWidth, viewportWidth) {
  return cardLeft - (viewportWidth - cardWidth) / 2
}

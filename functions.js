export function getRandomNaturalNumber(min, max) {
  // Ensure the range is inclusive of min and max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomColor() {
  const maxDarkValue = 0x7f7f7f;
  return `#${Math.floor(Math.random() * maxDarkValue)
    .toString(16)
    .padStart(6, "0")}`;
}

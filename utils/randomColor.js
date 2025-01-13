export function randomColor() {
  const randomChannel = () => Math.floor(Math.random() * 160);
  const r = randomChannel().toString(16).padStart(2, "0");
  const g = randomChannel().toString(16).padStart(2, "0");
  const b = randomChannel().toString(16).padStart(2, "0");
  return `#${r}${g}${b}`;
}

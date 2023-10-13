export function changeValue(input: HTMLInputElement, delta: number) {
  let value = parseInt(input.value, 10);
  value += delta;
  input.value = value.toString();
}

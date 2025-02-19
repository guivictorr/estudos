function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;

  if (typeof a === 'string' && typeof b === 'string') return a + b;

  return `${a}, ${b}`;
}

console.log(addOrConcat(1, 2));
console.log(addOrConcat('Guilherme ', 'Victor'));
console.log(addOrConcat(1, 'String'));

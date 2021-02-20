function multiplyArgs(...args: Array<number>): number {
  return args.reduce((total, value) => total * value);
}

const multiply = multiplyArgs(3, 3);

console.log(multiply);

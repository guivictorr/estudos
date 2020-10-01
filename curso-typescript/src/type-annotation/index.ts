/* eslint-disable */

// Basic types

let personName: string = 'Guilherme';
let personAge: number = 18;
let isAdult: boolean = true;

// Arrays
let numberArr: Array<number> = [1, 2, 3];
let numberArr2: number[] = [1, 2, 3];
let stringArr: Array<string> = ['a', 'b'];
let stringArr2: string[] = ['a', 'b'];

// Objects
let person: {
  personName: string;
  personAge: number;
  isAdult?: boolean;
};

person = {
  personAge: 18,
  personName: 'Guilherme',
  isAdult: false,
};

// Functions
function sum(x: number, y: number): number {
  return x + y;
}

let result = sum(1, 2); // result is a number

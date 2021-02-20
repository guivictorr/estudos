const objectA: {
  keyA: string;
  keyB: string;
  [key: string]: unknown;
} = {
  keyA: 'Guilherme',
  keyB: 'Victor',
};

objectA.keyA = 'Value';
objectA.keyB = 'Other Value';
objectA.keyC = 'Test';

console.log(objectA);

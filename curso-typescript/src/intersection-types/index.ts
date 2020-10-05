type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };

type Person = (HasName & HasLastName) | HasAge;

const person: Person = {
  name: 'Guilherme',
  lastName: 'Victor',
};

export { person };

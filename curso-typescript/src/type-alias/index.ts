type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';
type FavoriteColor = ColorRGB | ColorCMYK;

type Person = {
  name: string;
  age: number;
  salary: number;
  favoriteColor?: string;
};

const person1: Person = {
  name: 'Guilherme',
  age: 18,
  salary: 0,
};

function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return {
    ...person,
    favoriteColor: color,
  };
}

console.log(setFavoriteColor(person1, 'Black'));
console.log(person1);

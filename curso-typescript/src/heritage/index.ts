export class Person {
  public name: string;
  public lastName: string;
  private age: number;
  protected cpf: string;

  constructor(name: string, lastName: string, age: number, cpf: string) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.cpf = cpf;
  }

  public getAge(): number {
    return this.age;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getCompleteName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

export class Student extends Person {}

const student = new Student('Guilherme', 'Victor', 18, '000.000.000-35');

console.log(student.getCompleteName());

export class Company {
  public readonly name: string;
  private readonly cnpj: string;
  protected readonly partners: Partner[] = [];

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addPartner(...args: Partner[]): void {
    this.partners.push(...args);
  }

  showPartners(): void {
    for (const partner of this.partners) {
      console.log(partner);
    }
  }
}

export class Partner {
  public readonly name: string;
  public readonly lastName: string;

  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
}

const company1 = new Company('Udemy', '11.111.111/0001-11');

const partner1 = new Partner('Mike', 'Wauzauski');
const partner2 = new Partner('Bob', 'Esponja');
company1.addPartner(partner1, partner2);

company1.showPartners();
console.log('====================');
console.log(company1);

export class GMultipleDatatype<DatatypeOne, DatatypeTwo> {
  constructor(private valueOne: DatatypeOne, private valueTwo: DatatypeTwo) {}

  getValueOne(): DatatypeOne {
    return this.valueOne;
  }

  setValueOne(valueOne: DatatypeOne): void {
    this.valueOne = valueOne;
  }

  getValueTwo(): DatatypeTwo {
    return this.valueTwo;
  }

  setValueTwo(valueTwo: DatatypeTwo): void {
    this.valueTwo = valueTwo;
  }
}
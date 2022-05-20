export class ValidationMinValue {
  #value: number;
  #displayName: string;
  #minValue: number;
  constructor(value: number, displayName: string, minValue: number) {
    this.#value = value;
    this.#displayName = displayName;
    this.#minValue = minValue;
  }
  validate(): { status: boolean; errorMessage: string } {
    const result = this.#value >= this.#minValue;
    return {
      status: result,
      errorMessage: `The value of the ${this.#displayName} is too short. The minumum value can be ${this.#minValue}.`,
    };
  }
  set value(value: number) {
    this.#value = value;
  }
  get value() {
    return this.#value;
  }
  set displayName(value: string) {
    this.#displayName = value;
  }
  get displayName() {
    return this.#displayName;
  }
  set minValue(value: number) {
    this.#minValue = value;
  }
  get minValue() {
    return this.#minValue;
  }
}

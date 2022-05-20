export class ValidationMaxValue {
  #value: number;
  #displayName: string;
  #maxValue: number;
  constructor(value: number, displayName: string, maxValue: number) {
    this.#value = value;
    this.#displayName = displayName;
    this.#maxValue = maxValue;
  }
  validate(): { status: boolean; errorMessage: string } {
    const result = this.#value <= this.#maxValue;
    return {
      status: result,
      errorMessage: `The value of the ${this.#displayName} is too long. The maximum value can be ${this.#maxValue}.`,
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
  set maxValue(value: number) {
    this.#maxValue = value;
  }
  get maxValue() {
    return this.#maxValue;
  }
}

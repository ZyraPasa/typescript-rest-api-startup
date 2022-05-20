export class ValidationMinLength {
  #value: string;
  #displayName: string;
  #minLength: number;
  constructor(value: string, displayName: string, minLength: number) {
    this.#value = value;
    this.#displayName = displayName;
    this.#minLength = minLength;
  }
  validate(): { status: boolean; errorMessage: string } {
    const result = this.#value.length >= this.#minLength;
    return {
      status: result,
      errorMessage: `The length of the ${this.#displayName} is too short. The minumum length can be ${
        this.#minLength
      }.`,
    };
  }
  set value(value: string) {
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
  set minLength(value: number) {
    this.#minLength = value;
  }
  get minLength() {
    return this.#minLength;
  }
}

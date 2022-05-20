export class ValidationMaxLength {
  #value: string;
  #displayName: string;
  #maxLength: number;
  constructor(value: string, displayName: string, maxLength: number) {
    this.#value = value;
    this.#displayName = displayName;
    this.#maxLength = maxLength;
  }
  validate(): { status: boolean; errorMessage: string } {
    const result = this.#value.length <= this.#maxLength;
    return {
      status: result,
      errorMessage: `The length of the ${this.#displayName} is too long. The maximum length can be ${this.#maxLength}.`,
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
  set maxLength(value: number) {
    this.#maxLength = value;
  }
  get maxLength() {
    return this.#maxLength;
  }
}

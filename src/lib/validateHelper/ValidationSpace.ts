export class ValidationSpace {
  #value: string;
  #displayName: string;
  constructor(value: string, displayName: string) {
    this.#value = value;
    this.#displayName = displayName;
  }
  validate(): { status: boolean; errorMessage: string } {
    const result = this.#value.indexOf(" ") === -1;
    return {
      status: result,
      errorMessage: `The ${this.#displayName} space cannot be used.`,
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
}

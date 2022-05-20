export class ValidationEmail {
  #value: string;
  #displayName: string;
  #emailCode: any =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(value: string, displayName: string) {
    this.#value = value;
    this.#displayName = displayName;
  }
  validate(): { status: boolean; errorMessage: string } {
    const result = this.#emailCode.test(this.#value);
    return {
      status: result,
      errorMessage: `The ${this.#displayName} is not a email. The can only be email.`,
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

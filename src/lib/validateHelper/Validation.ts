export class Validation {
  #validations: Array<any>;
  constructor(validations: Array<any>) {
    this.#validations = validations;
  }
  validateAll(): { status: boolean; errorList?: Array<any> } {
    if (!this.#validations.length) return { status: true };
    const errorValidate: Array<any> = [];
    this.#validations.forEach((validation) => {
      const validateControl = validation.validate();
      if (!validateControl.status) return errorValidate.push(validateControl);
    });
    return { status: errorValidate.length === 0 ? true : false, errorList: errorValidate };
  }
  addNewValidation(validation: any): void {
    this.#validations.push(validation);
  }
  removeValidation(validationIndex: number): void {
    this.#validations.splice(validationIndex, 1);
  }
}

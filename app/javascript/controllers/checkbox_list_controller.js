import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["checkbox"];

  checkAll() {
    console.log("I'm in")
    this.setAllCheckboxes(true);
  }

  checkNone() {
    this.setAllCheckboxes(false);
  }

  setAllCheckboxes(checked) {
    this.checkboxes.forEach((el) => {
      const checkbox = el;

      if (!checkbox.disabled) {
        checkbox.checked = checked;
      }
    });
  }

  get checkboxes() {
    return new Array(...this.checkboxTargets);
  }
}

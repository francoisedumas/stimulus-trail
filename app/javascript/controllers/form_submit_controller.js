import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["day"]

  handleChange() {
    this.element.submit();
  }
}

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["checkbox", "button"]

  connect() {
    this.check()
  }

  check() {
    if (this.checkboxTargets.some(x => x.checked)) {
      this.buttonTarget.disabled = false
    } else {
      this.buttonTarget.disabled = true
    }
  }

}

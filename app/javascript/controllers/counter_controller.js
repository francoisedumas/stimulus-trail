import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "counter" ]
  static values = { level: Number }

  increment() {
    this.levelValue += 1
    this.counterTarget.innerHTML = this.levelValue
  }
  decrement() {
    this.levelValue -= 1
    this.counterTarget.innerHTML = this.levelValue
  }

}

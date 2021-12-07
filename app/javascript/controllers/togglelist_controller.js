import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "list" ]

  toggle() {
    this.listTarget.classList.toggle("element-toggle")
  }
}

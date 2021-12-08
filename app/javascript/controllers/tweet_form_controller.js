
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "body", "characterCount" ]

  initialize() {
    this.update()
  }

  update() {
    let count = this.bodyTarget.value.length
    let message = ""
    if (count == 1) {
      message = "1 character (max 40)"
    } else {
      message = `${count} characters (max 40)`
    }
    this.characterCountTarget.textContent = message

    if (count > 40 ){
      this.characterCountTarget.classList.add("text-red-600")
    } else {
      this.characterCountTarget.classList.remove("text-red-600")
    }
  }

  submit(event) {
    console.log('I am in')
    let count = this.bodyTarget.value.length
    if (count > 40 ){
      event.preventDefault()
    }
  }

}

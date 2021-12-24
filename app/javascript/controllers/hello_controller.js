import { Controller } from 'stimulus';
export default class extends Controller {
  static targets = ["heading"]

  connect() {
    console.log("hello welcome to your Stimulus trail!")
  }
  greet() {
    this.headingTarget.innerHTML = "Day 1 checked ✅"
  }
}

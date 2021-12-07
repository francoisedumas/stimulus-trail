import { Controller } from 'stimulus';
export default class extends Controller {
  static targets = ["heading"]

  connect() {
    console.log("hello from StimulusJS")
  }
  greet() {
    this.headingTarget.innerHTML = "Day 1 checked ✅"
  }
}

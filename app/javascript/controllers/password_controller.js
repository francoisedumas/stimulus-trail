import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["eye", "unhide"];

  show() {
    if (this.eyeTarget.textContent === "Show") {
      this.eyeTarget.textContent = "Hide";
      this.unhideTarget.type = "text";
    } else {
      this.eyeTarget.textContent = "Show";
      this.unhideTarget.type = "password";
    }
  }
}

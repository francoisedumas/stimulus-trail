import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "runner" ]

  spinIt(e) {
    const x = (window.innerWidth/2 - e.pageX)
    this.runnerTarget.style.transform = `rotate(${x}deg)`
  }
}

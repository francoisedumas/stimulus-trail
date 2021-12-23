import { Controller } from "stimulus";

export default class extends Controller {
  move(event) {
    if (event.key === "q") {
      this.moveForward();
    }
  }

  moveForward() {
    // still some JS here to catch the active!
    const wagon = document.querySelector(`#player-race .active`)
    if (wagon.nextElementSibling) {
      wagon.classList.remove('active');
      wagon.nextElementSibling.classList.add('active')
    }
    if (wagon.nextElementSibling.classList.value.includes("finish")) {
      setTimeout(function(){ alert(`You're a winner`) }, 500);
      setTimeout(function(){ window.location.reload() }, 500);
    }
  }
}

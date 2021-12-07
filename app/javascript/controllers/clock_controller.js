import { Controller } from 'stimulus';
const controllers = new Set

const timer = setInterval(() => {
  controllers.forEach(controller => controller.tick())
}, 1000)

export default class extends Controller {
  static targets = ["hourHand", "minHand", "secondHand"]
  connect() {
    controllers.add(this)
  }

  disconnect() {
    controllers.delete(this)
  }

  setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    this.secondHandTarget.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    this.minHandTarget.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    this.hourHandTarget.style.transform = `rotate(${hourDegrees}deg)`;
  }

  tick() {
    this.setDate()
    // console.log("Tick!", this)
  }
}

// See https://github.com/hotwired/stimulus/issues/233

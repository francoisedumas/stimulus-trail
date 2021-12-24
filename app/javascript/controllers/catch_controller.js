import { Controller } from 'stimulus';
export default class extends Controller {
  static targets = ["hole", "scoreBoard"]

  static values = {
    timeUp: { type: Boolean, default: false },
    score: Number,
    lastHole: Object
  }

  startGame() {
    this.scoreBoardTarget.textContent = 0;
    this.timeUpValue = false;
    this.scoreValue = 0;
    this.peep();
    setTimeout(() => this.timeUpValue = true, 10000)
  }

  peep() {
    const time = this.randomTime(200, 1000);
    const hole = this.randomHole();
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!this.timeUpValue) this.peep();
    }, time);
  }

  randomHole() {
    const idx = Math.floor(Math.random() * this.holeTargets.length);
    const hole = this.holeTargets[idx];
    if (hole === this.lastHoleValue) {
      console.log('Ah nah thats the same one bud');
      return this.randomHole();
    }
    this.lastHoleValue = hole;
    return hole;
  }

  randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  bonk(e) {
    if(!e.isTrusted) return; // cheater!
    this.scoreValue ++;
    // e.currentTarget gives you the the image you clicked on
    console.log(e.currentTarget)
    e.currentTarget.parentNode.classList.remove('up');
    this.scoreBoardTarget.textContent = this.scoreValue;
  }
}

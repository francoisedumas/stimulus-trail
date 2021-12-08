import { Controller } from 'stimulus';
export default class extends Controller {
  static values = { sound: String, key: Number }

  play() {
    const sound_path = `sounds/${this.soundValue}`
    const sound = new Audio(sound_path);
    sound.play();
  }

  playKeyboard(event) {
    if (event.keyCode == this.keyValue) {
      this.play()
    }
  }
}

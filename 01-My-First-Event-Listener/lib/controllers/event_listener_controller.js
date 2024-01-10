import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log('hello from event listener controller')
  }

  disabled() {
    this.element.innerText = "Bingo";
    this.element.classList.add('disabled');
    new Audio('../../sound.mp3').play();
  }
}

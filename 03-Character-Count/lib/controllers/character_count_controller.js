import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['input', 'countText']

  countCharacters() {
    const inputLength = this.inputTarget.value.length
    if (inputLength > 140) {
      this.inputTarget.classList.add('border-danger')
      this.countTextTarget.innerText = '140 limit characters exeded'
    } else if (inputLength == 1) {
      this.countTextTarget.innerText = `${inputLength} character`
    } else {
      this.countTextTarget.innerText = `${inputLength} characters`
    }
  }
}

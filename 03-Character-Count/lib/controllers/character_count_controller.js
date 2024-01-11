import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['input', 'countText']

  countCharacters() {
    const inputLength = this.inputTarget.value.length
    const logicLength = inputLength > 1 ? `${inputLength} characters` : `${inputLength} character`
    this.countTextTarget.innerText = logicLength
  }
}

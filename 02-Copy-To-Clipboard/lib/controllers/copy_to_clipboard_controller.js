import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", 'button']
  static values = {
    copied: String
  }

  copy() {
    const apiKey = this.inputTarget.value
    this.buttonTarget.innerText = this.copiedValue
    this.buttonTarget.classList.add('disabled')
  }
}

import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['checkbox']

  checkAll(event) {
    if (event.currentTarget.checked) {
      this.checkboxTargets.forEach(checkbox => {
        checkbox.checked = true
        });
    } else {
      this.checkboxTargets.forEach(checkbox => checkbox.checked = false);
    }
  }
}

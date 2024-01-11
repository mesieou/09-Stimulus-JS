import { Controller } from "@hotwired/stimulus";
import { Chart } from "chart.js";

export default class extends Controller {
  connect() {
    const worldPopulation = {
      "men": 504,
      "women": 496
    }
    const labels = Object.keys(worldPopulation)
    const data = Object.values(worldPopulation)

    new Chart(this.element, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: 'Gender Ratio',
          data: data,
          backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }
    });
  }
}

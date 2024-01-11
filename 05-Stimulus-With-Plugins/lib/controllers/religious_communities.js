import { Controller } from "@hotwired/stimulus";
import { Chart } from "chart.js";

export default class extends Controller {
  connect() {
    const worldReligions = {
      "christianity": 2382000000,
      "islam": 1962000000,
      "secular/agnostic/atheist": 1258000000,
      "hinduism": 1267000000,
      "buddhism": 520000000,
      "sikhism": 30000000,
      "judaism": 15000000,
      "other": 100000000,
    };
    const labels = Object.keys(worldReligions)
    const data = Object.values(worldReligions)

    new Chart(this.element, {
      type: 'polarArea',
      data: {
        labels: labels,
        datasets: [{
          label: 'World Religions',
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

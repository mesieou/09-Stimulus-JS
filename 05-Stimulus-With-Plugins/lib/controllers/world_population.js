import { Controller } from "@hotwired/stimulus";
import { Chart } from "chart.js";

export default class extends Controller {

  connect() {
    const worldPopulationGrowth = {
      "2020": 7794798739,
      "2019": 7713468100,
      "2018": 7631091040,
      "2017": 7547858925,
      "2016": 7464022049,
      "2015": 7379797139,
      "2014": 7295290765,
      "2013": 7210581960,
      "2012": 7125828881,
      "2011": 7041190946,
      "2010": 6956823603
    };
    const labels = Object.keys(worldPopulationGrowth)
    const data = Object.values(worldPopulationGrowth)

    new Chart(this.element, {
      type: 'bar',
      data: {
        labels: labels,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
        datasets: [{
          label: 'World Population Growth',
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

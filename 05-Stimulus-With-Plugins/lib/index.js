import { Application } from "@hotwired/stimulus";
import GenderRatio from "./controllers/gender_ratio.js";
import ReligiousCommunities from "./controllers/religious_communities.js";
import WorldPopulation from "./controllers//world_population.js";
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";

window.Stimulus = Application.start();

Stimulus.register('gender-ratio',GenderRatio)
Stimulus.register('religious-communities',ReligiousCommunities)
Stimulus.register('world-population',WorldPopulation)

const controllers = Object.values(Chartjs).filter(
  (chart) => chart.id !== undefined
);
Chart.register(...controllers);

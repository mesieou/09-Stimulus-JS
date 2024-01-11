/* eslint-disable import/extensions */
import { Application } from "stimulus";
import CheckAllCheckboxesController from "./controllers/check-all-checkboxes-controller.js";
// TODO: Import the Stimulus Controller here

window.Stimulus = Application.start();
Stimulus.register('check-all-checkboxes', CheckAllCheckboxesController)
// TODO: Register your Stimulus Controller below

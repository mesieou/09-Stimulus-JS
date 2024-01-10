/* eslint-disable import/extensions */
import { Application } from "@hotwired/stimulus";
import CopyToClipboardController from "./controllers/copy_to_clipboard_controller.js"
// TODO: Import the Stimulus Controller here

window.Stimulus = Application.start();
Stimulus.register('copy-to-clipboard-controller', CopyToClipboardController)
// TODO: Register your Stimulus Controller below

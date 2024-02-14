// Main
import { greetings, serviceInfo, priceInfo, reminderInfo, thanks } from "./App.js";

document.addEventListener("DOMContentLoaded", greetings);

// Nav bar button element Selection
const greetingsButton = document.getElementById("greeting");
const serviceInfoButton = document.getElementById("service-info");
const priceButton = document.getElementById("price");
const reminderButton = document.getElementById("reminder");
const thanksButton = document.getElementById("thanks");

// Add event listener to the nav bar buttons
greetingsButton.addEventListener('click', greetings);
serviceInfoButton.addEventListener('click', serviceInfo);
priceButton.addEventListener('click', priceInfo)
reminderButton.addEventListener('click', reminderInfo);
thanksButton.addEventListener('click', thanks);

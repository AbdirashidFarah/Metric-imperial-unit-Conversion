let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")

const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    if (inputEl.value !== "") {
      lengthEl.textContent = 
      `
        ${inputEl.value} meters = ${(inputEl.value * 3.2808).toFixed(3)} feet | 
        ${inputEl.value} feet = ${(inputEl.value / 3.2808).toFixed(3)} meters
      `
      volumeEl.textContent = 
      `
        ${inputEl.value} liters = ${(inputEl.value * 0.264172).toFixed(3)} gallons | 
        ${inputEl.value} gallons = ${(inputEl.value / 0.264172).toFixed(3)} liters
      `
      massEl.textContent = 
      `
        ${inputEl.value} kilos = ${(inputEl.value * 2.20462).toFixed(3)} pounds | 
        ${inputEl.value} pounds = ${(inputEl.value / 2.20462).toFixed(3)} kilos
      `
    }
  })
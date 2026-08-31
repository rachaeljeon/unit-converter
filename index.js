const length = document.getElementById("length-el")
const volume = document.getElementById("volume-el")
const mass = document.getElementById("mass-el")
let numberInput = document.getElementById("number-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    console.log("you've clicked this button!")
    
    // 1 meter = 3.281 feet
    // 1 liter = 0.264 gallon
    // 1 kilogram = 2.204 pound

    numberInput = numberInput.value

    let calcFeet = (numberInput * 3.28084).toFixed(3)
    let calcMeters = (numberInput / 3.28084).toFixed(3)
    let calcGallons = (numberInput * 0.264).toFixed(3)
    let calcLiters = (numberInput / 0.264).toFixed(3)
    let calcPounds = (numberInput * 2.204).toFixed(3)
    let calcKilos = (numberInput / 2.204).toFixed(3)

    length.innerHTML = `${numberInput} meters = ${calcFeet} feet | ${numberInput} feet = ${calcMeters} meters`
    volume.innerHTML = `${numberInput} liters = ${calcGallons} gallons | ${numberInput} gallons = ${calcLiters} liters`
    mass.innerHTML = `${numberInput} kilos = ${calcPounds} pounds | ${numberInput} pounds = ${calcKilos} kilos`


})
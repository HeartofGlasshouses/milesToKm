const miles = document.getElementById("miles")
const convertBtn = document.getElementById("convert")
const unitEl = document.getElementById("unit")
let km = 0

convertBtn.addEventListener("click", function(){
    if(miles.value != " "){
        let printKm = " "
        km = miles.value * 1.609
        printKm = `${miles.value} miles is ${km} kilometers`
        unitEl.innerHTML = printKm
    }
})
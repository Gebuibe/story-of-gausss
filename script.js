// Story of Gauss by D

// HTML Elements
let calcBtn = document.getElementById("calc-btn");
let sumOut =  document.getElementById("sum-out");

// Add Event Listener
calcBtn.addEventListener("click", calcSum);


// Event Function
function calcSum() {
    // Sum integers 1 to 100
    // let total = 0;
    // for (let n = 1; n <= 1000; n++) {
    //    total = total + n;
    // }

    let total = 1000 * 1001 / 2;

    // Output the Total
    sumOut.innerHTML = total;
}
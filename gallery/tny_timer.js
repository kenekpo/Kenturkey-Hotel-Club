"use strict";

// Call the showClock() function initially
showClock();

// Run the showClock() function every second
setInterval(showClock, 1000);

// Function to display the countdown clock
function showClock() {
    // Step a: Get the current date and time dynamically
    let thisDay = new Date(); 

    // Step b: Extract local date and time strings
    let localDate = thisDay.toLocaleDateString();
    let localTime = thisDay.toLocaleTimeString();

    // Step c: Update the inner HTML of the element with ID "currentTime"
    document.getElementById("currentTime").innerHTML = `<span>${localDate}</span> <span>${localTime}</span>`;

    // Step d: Call nextJuly4() and store the returned date
    let j4Date = nextJuly4(thisDay);

    // Step e: Set the time to 9 p.m. (21 in 24-hour format)
    j4Date.setHours(21, 0, 0, 0); // Ensures no leftover minutes/seconds

    // Step f: Calculate countdown variables
    let now = new Date(); // Current date and time
    let timeDiff = j4Date - now; // Time difference in milliseconds

    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Days left
    let hrs = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Hours left
    let mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // Minutes left
    let secs = Math.floor((timeDiff % (1000 * 60)) / 1000); // Seconds left

    // Step g: Update the text content of countdown elements
    document.getElementById("dLeft").textContent = days;
    document.getElementById("hLeft").textContent = hrs;
    document.getElementById("mLeft").textContent = mins;
    document.getElementById("sLeft").textContent = secs;
}

// Function to get the next July 4 date
function nextJuly4(currentDate) {
    let year = currentDate.getFullYear();
    let july4 = new Date(year, 6, 4); // July (month index 6)

    if (currentDate > july4) {
        // If today is past July 4, get next year's date
        july4.setFullYear(year + 1);
    }
    return july4;
   
}
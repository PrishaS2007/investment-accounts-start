// Investment Accounts Start Code

// HTML Variables
let outputEl = document.getElementById("output");

// Global Variables
let data = [2000, 4000, 3000, 4500, 1500]; // account data
let maxVal = 5000; // max data value

// Draw Array every 20ms
setInterval(drawDataArray, 20);

// Main Menu & Go Button
document.getElementById("go-btn").addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = document.getElementById("menu-select").value;

  // Take action based on menu selection
  if (selection === "deposit") {
    deposit();
  } else if (selection === "withdrawal") {
    withdrawal();
  } else if (selection === "count") {
    countUnder2000();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "attack") {
    hackerAttack();
  }
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function deposit() {
  let indexPrompt = +prompt("Which index (0-4)?");
  let depositPrompt = +prompt("How much do you want to deposit?");
  for (let i = 0; i < maxVal; i++) {
    if (data[i].length === indexPrompt) {
      container.innerHTML = drawDataArray(depositPrompt);
    }
  }
  outputEl.innerHTML = "Deposit confirmed";
}

function withdrawal() {
  let indexPrompt = +prompt("Which index (0-4)?");
  let withdrawPrompt = +prompt("How much do you want to withdraw?");
  for (let i = 0; i < maxVal; i++) {}

  outputEl.innerHTML = "Withdrawl Confirmed.";
}

function countUnder2000() {
  let valOfArray = 0;
  for (let val of data) {
    if (val < 2000) {
      valOfArray++;
    }
  }
  outputEl.innerHTML = `There is ${valOfArray} account with less than $2000.`;
}

function generousDonor() {
  for (let i = 0; i < data.length; i++) {
    if (data[i] < 2000) {
      container.innerHTML = data[i] += 500;
    }
  }
  outputEl.innerHTML = "Generous Donor! Total amount donated was $500.";
}

function hackerAttack() {
  for (let i = 0; i < data.length; i++) {
    container.innerHTML = data[i] *= 0.05;
  }

  outputEl.innerHTML = "Hacker Attack! Total amount stolen was $750.";
}

// ******************************************************
// END OF MENU SELECTION FUNCTIONS
// ******************************************************

// Function to draw current state of data array
function drawDataArray() {
  let outputStr = "";
  for (let val of data) {
    let divHeight = (val / maxVal) * 600; // Scale grades to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  document.getElementById("container").innerHTML = outputStr;
}

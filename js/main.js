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
  let indexPrompt = +prompt("Which account would you like to access (0-4)?");
  let depositPrompt = +prompt("How much do you want to deposit?");
  data[indexPrompt] = data[indexPrompt] + depositPrompt;
  if (data[indexPrompt] > maxVal) {
    maxVal = data[indexPrompt];
  }
  console.log(data);
  outputEl.innerHTML = "Deposit confirmed";
}

function withdrawal() {
  let indexPrompt = +prompt("Which account would you like to access (0-4)?");
  let withdrawPrompt = +prompt("How much do you want to withdraw?");
  if (data[indexPrompt] - withdrawPrompt >= 0) {
    data[indexPrompt] = data[indexPrompt] - withdrawPrompt;
  } else {
    alert("Please enter a lower amount!!");
  }
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
  let donatedAmount = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] < 2000) {
      data[i] += 500;
      donatedAmount += 500;
    }
  }
  outputEl.innerHTML = `Generous Donor! Total amount donated was $${donatedAmount}`;
}

function hackerAttack() {
  let amountStolen = 0;
  for (let i = 0; i < data.length; i++) {
    amountStolen += data[i] * 0.05;
    data[i] = data[i] - data[i] * 0.05;
  }
  outputEl.innerHTML = `Hacker Attack! Total amount stolen was $${amountStolen}`;
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

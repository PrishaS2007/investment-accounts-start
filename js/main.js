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

  outputEl.innerHTML = "Withdrawl Confirmed.";
}

function countUnder2000() {
  outputEl.innerHTML = "Count Under $2000";
}

function generousDonor() {
  // A generous donor has decided to give $500 to every investment
  // account that has less than $2000.
  // Modify the data array to apply this donation.
  // Use the outputEl to display the total amount of money that was donated.

  outputEl.innerHTML = "Generous Donor";
}

function hackerAttack() {
  // A hacker steals 5% from every account.
  // Modify the data array to apply this theft.
  // Use the outputEl to display the total amount that was stolen.

  outputEl.innerHTML = "Hacker Attack";
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

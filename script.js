"use strict";
window.addEventListener("load", start);

let userSelection;
let computerSelection;
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const choices = ["rock", "paper", "scissors"];

function start() {
  console.log("start");
  document.querySelector("#buttons").addEventListener("click", (e) => {
    player1.className = "player";
    player2.className = "player";
    document.querySelectorAll("#texts>*").forEach((text) => {
      text.className = "hidden";
    });
    getUserSelection(e.target.classList);
  });
}

function getUserSelection(e) {
  userSelection = e[0];
  console.log(userSelection);
  getComputerSelection();
}

function getComputerSelection() {
  let randomChoice = Math.floor(Math.random() * 3);
  computerSelection = choices[randomChoice];
  console.log(computerSelection);
  shakeHands();
}

function shakeHands() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", determineWinner);
}

function determineWinner() {
  player1.classList.replace("shake", userSelection);
  player2.classList.replace("shake", computerSelection);

  if (userSelection === computerSelection) {
    showDraw();
  } else {
    switch (userSelection) {
      case "rock":
        if (computerSelection === "paper") {
          showLose();
        } else {
          showWin();
        }
        break;
      case "paper":
        if (computerSelection === "rock") {
          showWin();
        } else {
          showLose();
        }
        break;
      case "scissors":
        if (computerSelection === "paper") {
          showWin();
        } else {
          showLose();
        }
    }
  }
}

function showWin() {
  document.querySelector("#win").classList.remove("hidden");
}

function showLose() {
  document.querySelector("#lose").classList.remove("hidden");
}

function showDraw() {
  document.querySelector("#draw").classList.remove("hidden");
}

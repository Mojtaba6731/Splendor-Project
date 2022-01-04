// Drag and Drop Section:
const coins = document.querySelectorAll(".coin");
const cards = document.querySelectorAll(".card");

let dragged, cardImg;
const dragStart = function () {
  dragged = this;
  cardImg = dragged.firstElementChild;
  previousCard = dragged.firstElementChild;
};

const dragOver = (e) => {
  // Ref: https://developer.cdn.mozilla.net/en-US/docs/Web/API/Document/dragover_event
  e.preventDefault();
};

function dragDrop() {
  // Coins Drag and Drop

  // to check User2 conis(max 10 coins limited)
  if (this.dataset.parent === "user2-coins" && user2Coins() === 10) {
    alert("You can't take more than 10 coins");
  } else if (this.dataset.parent === "user2-coins" && user2Coins() < 10) {
    if (
      (dragged.classList.contains("coins-red") &&
        this.classList.contains("coins-red")) ||
      (dragged.classList.contains("coins-blue") &&
        this.classList.contains("coins-blue")) ||
      (dragged.classList.contains("coins-green") &&
        this.classList.contains("coins-green")) ||
      (dragged.classList.contains("coins-white") &&
        this.classList.contains("coins-white")) ||
      (dragged.classList.contains("coins-black") &&
        this.classList.contains("coins-black")) ||
      (dragged.classList.contains("coins-gold") &&
        this.classList.contains("coins-gold"))
    ) {
      // this "if" Prevents the display of negative numbers
      if (parseInt(dragged.textContent) == 0) {
        alert("Sorry, Out of Stock for Now.");
      } else {
        // now,add a coin to drop and cost from drag
        const n1 = parseInt(this.textContent);
        this.textContent = n1 + 1;
        const n2 = parseInt(dragged.textContent);
        dragged.textContent = n2 - 1;
      }
    }
  }
  // to check User1 conis(max 10 coins limited)
  if (this.dataset.parent === "user1-coins" && user1Coins() === 10) {
    alert("You can't take more than 10 coins");
  } else if (this.dataset.parent === "user1-coins" && user1Coins() < 10) {
    if (
      (dragged.classList.contains("coins-red") &&
        this.classList.contains("coins-red")) ||
      (dragged.classList.contains("coins-blue") &&
        this.classList.contains("coins-blue")) ||
      (dragged.classList.contains("coins-green") &&
        this.classList.contains("coins-green")) ||
      (dragged.classList.contains("coins-white") &&
        this.classList.contains("coins-white")) ||
      (dragged.classList.contains("coins-black") &&
        this.classList.contains("coins-black")) ||
      (dragged.classList.contains("coins-gold") &&
        this.classList.contains("coins-gold"))
    ) {
      // this "if" Prevents the display of negative numbers
      if (parseInt(dragged.textContent) == 0) {
        alert("Sorry, Out of Stock for Now.");
      } else {
        // now,add a coin to drop and cost from drag
        const n1 = parseInt(this.textContent);
        this.textContent = n1 + 1;
        const n2 = parseInt(dragged.textContent);
        dragged.textContent = n2 - 1;
      }
    }
  }
  // switch the coins between users and board
  if (this.dataset.parent === "board-coins") {
    if (
      (dragged.classList.contains("coins-red") &&
        this.classList.contains("coins-red")) ||
      (dragged.classList.contains("coins-blue") &&
        this.classList.contains("coins-blue")) ||
      (dragged.classList.contains("coins-green") &&
        this.classList.contains("coins-green")) ||
      (dragged.classList.contains("coins-white") &&
        this.classList.contains("coins-white")) ||
      (dragged.classList.contains("coins-black") &&
        this.classList.contains("coins-black")) ||
      (dragged.classList.contains("coins-gold") &&
        this.classList.contains("coins-gold"))
    ) {
      // this "if" Prevents the display of negative numbers
      if (parseInt(dragged.textContent) == 0) {
        alert("Sorry, Out of Stock for Now.");
      } else {
        // now,add a coin to drop and cost from drag
        const n1 = parseInt(this.textContent);
        this.textContent = n1 + 1;
        const n2 = parseInt(dragged.textContent);
        dragged.textContent = n2 - 1;
      }
    }
  }

  // Cards Drag and Drop
  // Check Drop Location!
  if (
    this.dataset.parent === "user1-cards" ||
    this.dataset.parent === "user2-cards" ||
    this.classList.contains("reserve-cards")
  ) {
    // Check Drag Location to make Dicision!
    if (dragged.dataset.cardLvl === "one") {
      this.append(cardImg);
      putNewLvlOne();
    } else if (dragged.dataset.cardLvl === "two") {
      this.append(cardImg);
      putNewLvlTwo();
    } else if (dragged.dataset.cardLvl === "three") {
      this.append(cardImg);
      putNewLvlThree();
    } else if (dragged.classList.contains("reserve-cards")) {
      this.append(cardImg);
    } else {
      alert("You Can't Do This!");
    }
  }
}
function putNewLvlOne() {
  let newCardImg = document.createElement("img");
  newCardImg.src = levelOneCard();
  dragged.appendChild(newCardImg);
}
function putNewLvlTwo() {
  let newCardImg = document.createElement("img");
  newCardImg.src = levelTwoCard();
  dragged.appendChild(newCardImg);
}
function putNewLvlThree() {
  let newCardImg = document.createElement("img");
  newCardImg.src = levelThreeCard();
  dragged.appendChild(newCardImg);
}

for (const coin of coins) {
  coin.addEventListener("dragstart", dragStart);
  coin.addEventListener("dragover", dragOver);
  coin.addEventListener("drop", dragDrop);
}

for (const card of cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragover", dragOver);
  card.addEventListener("drop", dragDrop);
}

// Random Card Section:
const allLevelOneCards = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
];
const allLevelTwoCards = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
];
const allLevelThreeCards = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];
const allNobels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function levelOneCard() {
  const cardNumber =
    allLevelOneCards[Math.floor(Math.random() * allLevelOneCards.length)];
  allLevelOneCards.splice(cardNumber - 1, 1);
  return encodeURI(`/img/Cards/Level I/Lvl1-${cardNumber}.png`);
}
function levelTwoCard() {
  const cardNumber =
    allLevelTwoCards[Math.floor(Math.random() * allLevelTwoCards.length)];
  allLevelTwoCards.splice(cardNumber - 1, 1);
  return encodeURI(`/img/Cards/Level II/Lvl2-${cardNumber}.png`);
}
function levelThreeCard() {
  const cardNumber =
    allLevelThreeCards[Math.floor(Math.random() * allLevelThreeCards.length)];
  allLevelThreeCards.splice(cardNumber - 1, 1);
  return encodeURI(`/img/Cards/Level III/Lvl3-${cardNumber}.png`);
}
function nobel() {
  const nobelNumber = allNobels[Math.floor(Math.random() * allNobels.length)];
  allNobels.splice(nobelNumber - 1, 1);
  return encodeURI(`/img/Cards/Nobels/Nobel-${nobelNumber}.png`);
}
// Random cards when starting the game:
for (let i = 1; i < 5; i++) {
  document.querySelector(`.card-lvl1-${i}`).src = levelOneCard();
}
for (let i = 1; i < 5; i++) {
  document.querySelector(`.card-lvl2-${i}`).src = levelTwoCard();
}
for (let i = 1; i < 5; i++) {
  document.querySelector(`.card-lvl3-${i}`).src = levelThreeCard();
}
for (let i = 1; i < 4; i++) {
  document.querySelector(`.random-nobel-${i}`).src = nobel();
}

// Users-Coins counter
function user1Coins() {
  let u1Coins = 0;
  ["red", "blue", "green", "white", "black", "gold"].forEach((value) => {
    let selectDiv = document.querySelector(`[data-user1-coins='${value}']`);
    selectDivCount = parseInt(selectDiv.textContent);
    u1Coins += parseInt(selectDiv.textContent);
  });
  return u1Coins;
}
function user2Coins() {
  let u2Coins = 0;
  ["red", "blue", "green", "white", "black", "gold"].forEach((value) => {
    let selectDiv = document.querySelector(`[data-user2-coins='${value}']`);
    selectDivCount = parseInt(selectDiv.textContent);
    u2Coins += parseInt(selectDiv.textContent);
  });
  return u2Coins;
}

// Nobel Marks
let phase = 0;
const nobelMark = document.querySelectorAll("[data-nobel-mark]");
nobelMark.forEach((dataNobelMark) => {
  dataNobelMark.addEventListener("click", function (e) {
    phase++;
    if (phase % 3 === 1) {
      e.target.classList.add("nobel-mark-state1");
    } else if (phase % 3 === 2) {
      e.target.classList.add("nobel-mark-state2");
    } else {
      e.target.classList.remove("nobel-mark-state1", "nobel-mark-state2");
    }
  });
});

// window.onbeforeunload = function () {
//   return "Data will be lost if you leave the page, are you sure?";
// };

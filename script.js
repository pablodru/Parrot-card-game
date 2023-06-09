let numberCards = prompt("De 4 a 14, digite quantas cartas deseja jogar.");
while (numberCards % 2 !== 0 || numberCards > 14 || numberCards < 4) {
  numberCards = prompt(
    "O número de cartas deve ser par. Digite novamente o número de cartas que deseja jogar."
  );
}

onclick = "cardChosen()";

const arrayCards = [
  `<div class="card" onclick="cardChosen(this)" data-test="card">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" data-test="face-down-image"/>
    </div>
    <div class="back-face face">
      <img class="image" src="img/bobrossparrot.gif" alt="bobross" data-test="face-up-image"/>
    </div>
  </div>`,
  `<div class="card" onclick="cardChosen(this)" data-test="card">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" data-test="face-down-image"/>
    </div>
    <div class="back-face face">
      <img class="image" src="img/explodyparrot.gif" alt="bobross" data-test="face-up-image"/>
    </div>
  </div>`,
  `<div class="card" onclick="cardChosen(this)" data-test="card">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" data-test="face-down-image"/>
    </div>
    <div class="back-face face">
      <img class="image" src="img/fiestaparrot.gif" alt="bobross" data-test="face-up-image"/>
    </div>
  </div>`,
  `<div class="card" onclick="cardChosen(this)" data-test="card">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" data-test="face-down-image"/>
    </div>
    <div class="back-face face">
      <img class="image" src="img/metalparrot.gif" alt="bobross" data-test="face-up-image"/>
    </div>
  </div>`,
  `<div class="card" onclick="cardChosen(this)" data-test="card">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" data-test="face-down-image"/>
    </div>
    <div class="back-face face">
      <img class="image" src="img/revertitparrot.gif" alt="bobross" data-test="face-up-image"/>
    </div>
  </div>`,
  `<div class="card" onclick="cardChosen(this)" data-test="card">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" data-test="face-down-image"/>
    </div>
    <div class="back-face face">
      <img class="image" src="img/tripletsparrot.gif" alt="bobross" data-test="face-up-image"/>
    </div>
  </div>`,
  `<div class="card" onclick="cardChosen(this)" data-test="card">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" data-test="face-down-image"/>
    </div>
    <div class="back-face face">
      <img class="image" src="img/unicornparrot.gif" alt="bobross" data-test="face-up-image"/>
    </div>
  </div>`,
];

const listCards = [];
const listPairCards = [];
for (let i = 0; i < numberCards / 2; i++) {
  listCards.push(arrayCards[i]);
  listPairCards.push(arrayCards[i]);
}

function comparator() {
  return Math.random() - 0.5;
}

const number = comparator;

listCards.sort(comparator);
listPairCards.sort(comparator);

let listFinal = [];
for (let j = 0; j < listCards.length; j++) {
  listFinal.push(listCards[j]);
  listFinal.push(listCards[j]);
}

const main = document.querySelector(".main");

listFinal = listFinal.sort(comparator);

for (let i = 0; i < numberCards; i++) {
  main.innerHTML += listFinal[i];
}

let selectedCards = [];

function removeCard(frontCard) {
  frontCard.classList.remove("selected-front");
}

function removeCard2(backCard) {
  backCard.classList.remove("selected-back");
}

let front = [];
let back = [];

let counter = 0;
let counterWins = 0;

let time = 0;
function timeCounter() {
  time ++

  const searchTime = document.querySelector('h2');
  searchTime.innerHTML = time;

}

const myInterval = setInterval(timeCounter, 1000);

function cardChosen(chosen) {
  
  front.push(chosen.firstElementChild);
  front[front.length - 1].classList.add("selected-front");
  back.push(chosen.lastElementChild);
  back[back.length - 1].classList.add("selected-back");

  let content = back[back.length - 1].querySelector("img");
  selectedCards.push(content.src);

  counter++;

  if (
    selectedCards.length % 2 == 0 &&
    selectedCards[selectedCards.length - 1] !==
      selectedCards[selectedCards.length - 2]
  ) {
    const carta1 = back[back.length - 1];
    setTimeout(removeCard, 1000, front[front.length - 1]);
    setTimeout(removeCard2, 1000, back[back.length - 1]);
    setTimeout(removeCard, 1000, front[front.length - 2]);
    setTimeout(removeCard2, 1000, back[back.length - 2]);
  } else if (selectedCards.length % 2 == 0) {
    counterWins++;
    if (counterWins == listFinal.length / 2) {
      clearInterval(myInterval);
      alert(`Parabéns! Você ganhou em ${counter / 2} jogadas! A duração do jogo foi de ${time} segundos!`);

      const answer = prompt("Você gostaria de reiniciar a partida? (sim ou não)");
      if (answer == "sim"){
        location.reload();
      }
    }
  }
}
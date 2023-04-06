let numberCards = prompt("De 4 a 14, digite quantas cartas deseja jogar.");
while (numberCards % 2 !== 0 || numberCards > 14 || numberCards < 4) {
  numberCards = prompt(
    "O número de cartas deve ser par. Digite novamente o número de cartas que deseja jogar."
  );
}

const arrayCards = [
  `<div class="card">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" />
    </div>
    <div class="back-face face">
      <img class="image" src="img/bobrossparrot.gif" alt="bobross" />
    </div>
  </div>`,
  `<div class="card">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" />
    </div>
    <div class="back-face face">
      <img class="image" src="img/explodyparrot.gif" alt="bobross" />
    </div>
  </div>`,
  `<div class="card">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" />
    </div>
    <div class="back-face face">
      <img class="image" src="img/fiestaparrot.gif" alt="bobross" />
    </div>
  </div>`,
  `<div class="card">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" />
    </div>
    <div class="back-face face">
      <img class="image" src="img/metalparrot.gif" alt="bobross" />
    </div>
  </div>`,
  `<div class="card">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" />
    </div>
    <div class="back-face face">
      <img class="image" src="img/revertitparrot.gif" alt="bobross" />
    </div>
  </div>`,
  `<div class="card">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" />
    </div>
    <div class="back-face face">
      <img class="image" src="img/tripletsparrot.gif" alt="bobross" />
    </div>
  </div>`,
  `<div class="card">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" />
    </div>
    <div class="back-face face">
      <img class="image" src="img/unicornparrot.gif" alt="bobross" />
    </div>
  </div>`,
];

const listCards = [];
const listPairCards = [];
for (let i = 0; i < numberCards; i++) {
  listCards.push(arrayCards[i]);
  listPairCards.push(arrayCards[i]);
}

function comparator() {
  return Math.random() - 0.5;
}

const number = comparator

listCards.sort(number);
listPairCards.sort(number);

const main = document.querySelector(".main");

for (let i = 0; i < numberCards / 2; i++) {
  main.innerHTML += listCards[i] + listPairCards[i];
}

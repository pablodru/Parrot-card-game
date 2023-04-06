let numberCards = prompt("De 4 a 14, digite quantas cartas deseja jogar.");
while (numberCards % 2 !== 0 || numberCards > 14 || numberCards < 4) {
  numberCards = prompt(
    "O número de cartas deve ser par. Digite novamente o número de cartas que deseja jogar."
  );
}

onclick="cardChosen()"

const arrayCards = [
  `<div class="card" onclick="cardChosen(this)">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" />
    </div>
    <div class="back-face face">
      <img class="image" src="img/bobrossparrot.gif" alt="bobross" />
    </div>
  </div>`,
  `<div class="card" onclick="cardChosen(this)">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" />
    </div>
    <div class="back-face face">
      <img class="image" src="img/explodyparrot.gif" alt="bobross" />
    </div>
  </div>`,
  `<div class="card" onclick="cardChosen(this)">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" />
    </div>
    <div class="back-face face">
      <img class="image" src="img/fiestaparrot.gif" alt="bobross" />
    </div>
  </div>`,
  `<div class="card" onclick="cardChosen(this)">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" />
    </div>
    <div class="back-face face">
      <img class="image" src="img/metalparrot.gif" alt="bobross" />
    </div>
  </div>`,
  `<div class="card" onclick="cardChosen(this)">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" />
    </div>
    <div class="back-face face">
      <img class="image" src="img/revertitparrot.gif" alt="bobross" />
    </div>
  </div>`,
  `<div class="card" onclick="cardChosen(this)">
    <div class="front-face face">
      <img class="image" src="img/back.png" alt="card" />
    </div>
    <div class="back-face face">
      <img class="image" src="img/tripletsparrot.gif" alt="bobross" />
    </div>
  </div>`,
  `<div class="card" onclick="cardChosen(this)">
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
for (let i = 0; i < numberCards/2; i++) {
  listCards.push(arrayCards[i]);
  listPairCards.push(arrayCards[i]);
}

function comparator() {
  return Math.random() - 0.5;
}

const number = comparator

listCards.sort(comparator);
listPairCards.sort(comparator);

let listFinal = [];
for (let j=0; j<listCards.length; j++) {
    listFinal.push(listCards[j]);
    listFinal.push(listCards[j]);
}

const main = document.querySelector(".main");

listFinal = listFinal.sort(comparator);

for (let i = 0; i < numberCards; i++) {
  main.innerHTML += listFinal[i]
}

let selectedCards =[];

function removeCard(frontCard) {
  frontCard.classList.remove('selected-front');
}

function removeCard2(backCard) {
  backCard.classList.remove('selected-back');
}

let frente=[];
let verso=[];

function cardChosen(chosen) {

    frente.push(chosen.firstElementChild);
    frente[frente.length -1].classList.add('selected-front');
    verso.push(chosen.lastElementChild);
    verso[verso.length -1].classList.add('selected-back');

    let content = verso[verso.length-1].querySelector('img');
    selectedCards.push(content.src);

    if (selectedCards.length%2==0 && selectedCards[selectedCards.length - 1] !== selectedCards[selectedCards.length - 2]){
      const carta1 = verso[verso.length-1]
      setTimeout(removeCard,1000, frente[frente.length -1])
      setTimeout(removeCard2, 1000, verso[verso.length -1])
      setTimeout(removeCard,1000, frente[frente.length -2])
      setTimeout(removeCard2,1000, verso[verso.length-2])

    }
    console.log(frente);
    console.log(verso);
  }
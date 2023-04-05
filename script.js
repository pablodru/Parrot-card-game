let numberCards = prompt("De 4 a 14, digite quantas cartas deseja jogar.");
    while(numberCards%2 !== 0 && numberCards<=14 && numberCards >=4){
        numberCards = prompt("O número de cartas deve ser par. Digite novamente o número de cartas que deseja jogar.")
    }
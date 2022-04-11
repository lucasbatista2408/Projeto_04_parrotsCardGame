const listaMeme = [
{img: "/images/bobrossparrot.gif", nome: "meme1"},
{img: "/images/bobrossparrot.gif", nome: "meme1"},
{img: "/images/explodyparrot.gif", nome: "meme2"},
{img: "/images/explodyparrot.gif", nome: "meme2"},  
{img: "/images/fiestaparrot.gif", nome: "meme3"},
{img: "/images/fiestaparrot.gif", nome: "meme3"},
{img: "/images/metalparrot.gif", nome: "meme4"},
{img: "/images/metalparrot.gif", nome: "meme4"},
{img: "/images/revertitparrot.gif", nome: "meme5"},
{img: "/images/revertitparrot.gif", nome: "meme5"},
{img: "/images/tripletsparrot.gif", nome: "meme6"},
{img: "/images/tripletsparrot.gif", nome: "meme6"},
{img: "/images/unicornparrot.gif", nome: "meme7"},
{img: "/images/unicornparrot.gif", nome: "meme7"}]

const checkpair =[]
const newList = []
let tentativas;
let qtdCartas;
let acertos = 0;

function gameStart(){
  qtdCartas = prompt("Quantas cartas? (4 à 14)")
  let cards = document.querySelector(".grid");

    // SE O NUMERO NÃO FOR VALIDO, A FUNÇÃO É INICIADA ATÉ QUE O NUMERO SEJA VALIDO
    if ((qtdCartas < 4) || (qtdCartas > 14) || (qtdCartas%2 !== 0)){
      qtdCartas = 0;
      gameStart();
    }
    
    for (i = 0; i < qtdCartas; i++){
    newList.push(listaMeme[i])     // ARRAY COM O Nº DE CARTAS ESCOLHIDAS
    }

    newList.sort(sortear);

    // SE O NUMERO FOR VALIDO:
    for (i = 0; i < qtdCartas; i++){
        cards.innerHTML += `          
        <div class="card" data-framework ="${newList[i].nome}">
        <div class="front-parrot">
          <img src= "${newList[i].img}" alt"${newList[i].nome}"">
          </div>
          <div class="back-parrot">
          <img src= "/images/front.png" alt"${newList[i].nome}"">
          </div>
        </div>`
    }
    console.log(newList)
  }
gameStart()

// VIRAR CARTA & CHECK PAIR
const cards = document.querySelectorAll('.card');
console.log(cards)
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
contador = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    contador += 1
    console.log(contador)
    return;
  }

  secondCard = this;
  contador += 1;
  console.log(contador)
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
  
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
  acertos ++;
  setTimeout (gameEnding, 1000); 
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function gameEnding(){
  if(acertos === qtdCartas/2){
    alert(`GAME, ${contador}`)
  }
}
cards.forEach(card => card.addEventListener('click', flipCard));

// SORTEIO DAS CARTAS
function sortear() { 
	return Math.random() - 0.5; 
}
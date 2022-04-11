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

const newList = []

function gameStart(){
  let qtdCartas = prompt("Quantas cartas? (4 à 14)")
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
        <div class="card">
        <div class="front-parrot">
          <img src= "${newList[i].img}" alt"${newList[i].nome}" onclick=""">
          </div>
          <div class="back-parrot">
          <img src= "/images/front.png" alt"${newList[i].nome}" onclick=""">
          </div>
        </div>`
    }
    console.log(newList)
  }
gameStart()

// CHECK PAIR //

function checkPair(){
  let card1 = document.querySelector(".")
}






function sortear() { 
	return Math.random() - 0.5; 
}
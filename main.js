console.log('BlackJack')


// build the Deck

const suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts']
const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
let deck = []
console.log(deck)
// let newDeck = []
// console.log(newDeck)
// let randNum = []
let playerHand = []

let houseHand = []

const pHand = document.getElementById('pHand')
const hHand = document.getElementById('hHand')
console.log(pHand)

for (let i=0; i < suits.length; i++){
    for(let j = 0; j < numbers.length; j++){

        let card = {
            number: numbers[j],
            suit: suits[i]
        }
        
        deck.push(card)
        // deck.push(card.number + card.suit)
    }
}

function shuffle(){
    for (let i =0; i < 1000; i++){
        let spot1 = Math.floor(Math.random()*deck.length)
        let spot2 = Math.floor(Math.random()*deck.length)
        let cell = deck[spot1]

        deck[spot1] = deck[spot2];
        deck[spot2] = cell 
    }
}

const startButton = document.getElementById('start')
console.log(startButton)

startButton.addEventListener('click', startGame)

function startGame(evt){
    shuffle()
    deal()

    // createPHand()
    pCardDisplay()
    hCardDisplay()

/* take a random card from the deck array, 
splice - into a var
add 2 cards to playerHand array and houseHand array
then create space in html where card is shown
*/

}

function deal(){
    let pCard1 = deck.pop()
    playerHand.push(pCard1)
    let pCard2 = deck.pop()
    playerHand.push(pCard2)
    let hCard1 = deck.pop()
    houseHand.push(hCard1)
    let hCard2 = deck.pop()
    houseHand.push(hCard2)

    console.log(pCard1)
    console.log(pCard2)
    console.log(hCard1)
    console.log(hCard2)
    
}
console.log(playerHand)

// function createPHand(){
//     let card1 = playerHand[0].number + ' ' + playerHand[0].suit
//     console.log(card1)
// }

function pCardDisplay(){
    // for (let i=0; i< 8; i++){
    pHand.innerText = playerHand[0].number + ' ' + playerHand[0].suit
    pHand2.innerText = playerHand[1].number + ' ' + playerHand[1].suit
    
    
}

function hCardDisplay(){
    hHand.innerText = houseHand[0].number + ' ' + houseHand[0].suit
    hHand2.innerText = houseHand[1].number + ' ' + houseHand[1].suit


}

const hitButton = document.getElementById('hit')
console.log(hitButton)

hitButton.addEventListener('click', hitPlayer)

function hitPlayer(evt){
    addCard()
    pNewCardDisplay()

}

function addCard(){
    playerHand.push(deck.pop())
    console.log(playerHand)

}

function pNewCardDisplay(){
    pHand3.innerText = playerHand[2].number + ' ' + playerHand[2].suit
    pHand4.innerText = playerHand[3].number + ' ' + playerHand[3].suit
    pHand5.innerText = playerHand[4].number + ' ' + playerHand[4].suit
    pHand6.innerText = playerHand[5].number + ' ' + playerHand[5].suit
    pHand7.innerText = playerHand[6].number + ' ' + playerHand[6].suit
}


const standButton = document.getElementById('stand')
console.log(standButton)

standButton.addEventListener('click', houseTurn)

function houseTurn(evt){
    
    addHCard()
    hNewCardDisplay()

}


function addHCard(){
    houseHand.push(deck.pop())
    console.log(houseHand)

}

function hNewCardDisplay(){
    hHand3.innerText = houseHand[2].number + ' ' + houseHand[2].suit
    hHand4.innerText = houseHand[3].number + ' ' + houseHand[3].suit
    hHand5.innerText = houseHand[4].number + ' ' + houseHand[4].suit
    hHand6.innerText = houseHand[5].number + ' ' + houseHand[5].suit
    hHand7.innerText = houseHand[6].number + ' ' + houseHand[6].suit
   


}













// for (let i = 0; i < deck.length; i++){
//     randNum.push(i)

// }

// for (let i = 0; i < deck.length; i++){
//     // trying to select and card or index
//     // then push that card into a random location in newDeck
//     // const randomCard = Math.floor(Math.random()*deck.length)

//     // randNum.push(i)
//     // console.log(randNum)

//     // if (randNum.includes(randomCard)){

//     // }
//     const randomCard = Math.floor(Math.random()*deck.length)
//     let card = randNum[randomCard]
//     randNum.splice(randomCard, 1)
//     console.log(randNum)
//     console.log(randomCard)
//     newDeck.push(deck[card])

//     // console.log(randomCard)
//     // let card = deck[randomCard]
//     // newDeck.push(card)
// }

// function shuffle (){
   
// }






// for (let i = 0; i < deck.length; i++){
//         // trying to select and card or index
//         // then push that card into a random location in newDeck
//         const randomSpot = Math.floor(Math.random()*deck.length)
//         console.log(randomSpot)
//         if (newDeck[randomSpot] = ''){ 
//             newDeck[randomSpot] = deck[i]
//         }
            
        
//     }
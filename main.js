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

    pCardDisplay()
    hCardDisplay()

/* take a random card from the deck array, 
splice - into a var
add 2 cards to playerHand array and houseHand array
then create space in html where card is shown
*/

}

function deal(){
    let pCard1 = deck[0]
    playerHand.push(pCard1)
    let pCard2 = deck[2]
    playerHand.push(pCard2)
    let hCard1 = deck[1]
    houseHand.push(hCard1)
    let hCard2 = deck[3]
    houseHand.push(hCard2)

    console.log(pCard1)
    console.log(pCard2)
    console.log(hCard1)
    console.log(hCard2)
}


function createCard(){
    let card1 = playerHand[0].number + playerHand[0].suit
}

function pCardDisplay(){
    // pHand.innerText = card1

}

function hCardDisplay(){
    hHand.innerText = houseHand[0].number


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
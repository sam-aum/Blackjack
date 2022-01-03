console.log('BlackJack')


// build the Deck

const suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts']
const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
let deck = []
console.log(deck)
let newDeck = []
console.log(newDeck)

for (let i=0; i < suits.length; i++){
    for(let j = 0; j < numbers.length; j++){

        let card = {
            number: numbers[j],
            suit: suits[i]
        }
        deck.push(card)
    }
}

for (let i = 0; i < deck.length; i++){
    // trying to select and card or index
    // then push that card into a random location in newDeck
    const randomCard = Math.floor(Math.random()*deck.length)
    console.log(randomCard)
    let card = deck[randomCard]
    newDeck.push(card)
}


// for (let i = 0; i < deck.length; i++){
//         // trying to select and card or index
//         // then push that card into a random location in newDeck
//         const randomSpot = Math.floor(Math.random()*deck.length)
//         console.log(randomSpot)
//         if (newDeck[randomSpot] = ''){ 
//             newDeck[randomSpot] = deck[i]
//         }
            
        
//     }
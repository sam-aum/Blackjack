console.log('BlackJack')


// build the Deck

const suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts']
const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
let deck = []
console.log(deck)
// let newDeck = []
// console.log(newDeck)
// let randNum = []



// create Hand

let playerHand = []
let houseHand = []



// grab html

const pHand = document.getElementById('pHand')
const pHands = document.getElementById('pHands')

const hHand = document.getElementById('hHand')
const hHands = document.getElementById('hHands')

const sum1 = document.getElementById('sum1')
const sum2 = document.getElementById('sum2')

const pLife = document.getElementById('pLife')
const hLife = document.getElementById('hLife')



console.log(pHand)




// create cards then push to deck

for (let i=0; i < suits.length; i++){
    for(let j = 0; j < numbers.length; j++){

        // let value = parseInt(numbers[j])
        // if (numbers[j] == 'J' || numbers[j] == 'Q' || numbers[j] == 'K')
        //     value = 10;
        // if ()

        let value = j + 2
        if (numbers[j] == 'J' || numbers[j] == 'Q' || numbers[j] == 'K'){
           value = 10;
        }
        if (numbers[j] == "A"){
            value = 11
        }

        let card = {
            number: numbers[j],
            suit: suits[i],
            value: value
        }
        console.log(card.value + card.value)

        
        deck.push(card)
        // deck.push(card.number + card.suit)
    }
}



//shuffle deck

function shuffle(){
    for (let i =0; i < 1000; i++){
        let spot1 = Math.floor(Math.random()*deck.length)
        let spot2 = Math.floor(Math.random()*deck.length)
        let cell = deck[spot1]

        deck[spot1] = deck[spot2];
        deck[spot2] = cell 
    }
}



// start button

const startButton = document.getElementById('start')
console.log(startButton)

startButton.addEventListener('click', startGame)

function startGame(evt){
    shuffle()
    deal()

    //display cards
    pCardDisplay()
    hCardDisplay()

    //display sum
    displayPSum()
    displayHSum()

    

        /* take a random card from the deck array, 
        splice - into a var
        add 2 cards to playerHand array and houseHand array
        then create space in html where card is shown
        */

}


function reload(){
    return location.reload()
}

// deal the hand

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







// display the cards

function pCardDisplay(){
    for (let i=0; i< playerHand.length; i++){
        pHands.children[i].innerText = playerHand[i].number + ' ' + playerHand[i].suit
        
    }
}

function hCardDisplay(){
    for (let i=0; i< houseHand.length; i++){
        hHands.children[i].innerText = houseHand[i].number + ' ' + houseHand[i].suit
        
    }
}


// hit button

const hitButton = document.getElementById('hit')
console.log(hitButton)

hitButton.addEventListener('click', hitPlayer)

function hitPlayer(evt){
    addCard()
    pCardDisplay()
    displayPSum()
    winnerHit()
    hitDamage()
    
}

function addCard(){
    playerHand.push(deck.pop())
    console.log(playerHand)

}



// stay button

const standButton = document.getElementById('stand')
console.log(standButton)

standButton.addEventListener('click', houseTurn)

function houseTurn(evt){
    addHCard()
    hCardDisplay()
    displayHSum()    
    winnerStay()
    damage()

}


function addHCard(){
    for (let i=0; i < 7; i++){
        if (displayHSum() < 17){
            houseHand.push(deck.pop())
            console.log(houseHand)
        }
    }
}




        /* add numbers 
            need to give value to each card
        */



// add sum of card values and display

function displayPSum(){
    let playerSum = 0
    for (let i = 0; i < playerHand.length; i++){
        playerSum += playerHand[i].value
        console.log(playerSum)
        
    }
    
    pSum.innerText = playerSum
    return playerSum

}


// if house hand is < 17, add card value and display

function displayHSum(){
    let houseSum = 0
    for (let i = 0; i < houseHand.length; i++){
        houseSum += houseHand[i].value
        console.log(houseSum)
        
    }
    
    hSum.innerText = houseSum
    return houseSum

}

// determine and display winner

        /* 
            if playerSum > 21 then display you lose
            if playerSum > houseSum then display you win
            if houseSum > 21 then display you win
        */
function winnerHit(){
    if (displayPSum() > 21){
        document.getElementById('winner').innerText = 'You Lose'
        return 'playerBust'
    }
    
}

function winnerStay(){
    if (displayPSum() > displayHSum()){
        const win = document.getElementById('winner').innerText = 'You Win'
        return "higherValue"
    }
    else if (displayHSum() > 21){
        const win = document.getElementById('winner').innerText = 'You Win'
        return "houseBust"
    }
    else if (displayPSum() == displayHSum()){
        document.getElementById('winner').innerText = 'Push'
    }
    else (
        document.getElementById('winner').innerText = 'You Lose'
        
    )
}


// the betting / Life points

    /*
        house and player have life points
        player has creatures 
        house has creatures

        loser takes dam
        dam = difference 
        21 - 18 = 3 loser takes 3 damage

        if bust then busted player takes dam
        bust dam = sum - 21

        then maybe some "betting" before the game

    */

// create life points
let playerLife = 20
let houseLife = 20

pLife.innerText = playerLife
hLife.innerText = houseLife

function damage(){
 
    if (winnerStay() == 'higherValue' && winnerHit() !== 'playerBust'){
        let damage = displayPSum() - displayHSum()
        houseLife = houseLife - damage
    }
    if (winnerStay() == 'houseBust'){
        let damage = displayHSum() - 21
        houseLife = houseLife - damage
    }
    if (displayHSum() > displayPSum()){
        let damage = displayHSum() - displayPSum()
        playerLife = playerLife - damage
        pLife.innerText = playerLife
    }
    
    hLife.innerText = houseLife
    
    
}

function hitDamage(){
    if (winnerHit() == 'playerBust'){
        let damage = displayPSum() - 21
        playerLife = playerLife - damage 
    }
    pLife.innerText = playerLife
}







// for (let i = 0; i < deck.length; i++){
//     randNum.push(i)

// }

// for (let i = 0; i < deck.length; i++){
//     // trying to select and card or index
//     // then push that card into a random location in newDeck
//     // const randomCard = Math.floor(Math.random()*deck.length)

//     // randNum.push(i)
//     // console.log(randNum)i

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



// img: `https://deckofcardsapi.com/static/img/  .png`

// ${ranks[cardRank]} `
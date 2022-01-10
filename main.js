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

const deckTotal = document.getElementById('deckTotal')

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
            value: value,
            image: '../cards/' + numbers[j] + suits[i] + '.svg',
            
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

    //display deck count
    deckDisplay()

        /* take a random card from the deck array, 
        splice - into a var
        add 2 cards to playerHand array and houseHand array
        then create space in html where card is shown
        */

}


// reload function

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

    deckDisplay()
    
}
console.log(playerHand)


// display the cards
// img.src = card.image

function pCardDisplay(){
    for (let i=0; i< playerHand.length; i++){
        // this produces text
            pHands.children[i].innerText = playerHand[i].number + ' ' + playerHand[i].suit
        // this produces card images
        //     let img = new Image()    
        //     img.src = playerHand[i].image
        //     pHands.children[i].appendChild(img)        
        //     console.log(img)
       
    }
}

// function hitDisplay(){
//     let j = 2
//         for (let i=j; i< playerHand.length; i++){
      
//             let img = new Image()    
//             img.src = playerHand[i].image
//             pHands.children[i].appendChild(img)
//             console.log(img)
//             j = j + 1
//             return j
//         }
    
// }
        // console.log(deck2)
        // let asdf = deck2.pop()
        // asdf = deck2.pop()
        // img.src = asdf.image

        // cardDisplay.append(img)
        // console.log(img)



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
    deckDisplay()
    winnerHit()
    hitDamage()
    endGame()
    
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
    deckDisplay()
    winnerStay()
    stayDamage()
    endGame()
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


//assign damage

function stayDamage(){
    // win - if player has higher value 
    if (winnerStay() == 'higherValue' && winnerHit() !== 'playerBust'){
        let damage = displayPSum() - displayHSum()
        houseLife = houseLife - damage
    }
    // win - if house busts 
    if (winnerStay() == 'houseBust'){
        let damage = displayHSum() - 21
        houseLife = houseLife - damage
    }
    // lose - house has higher value
    if (displayHSum() > displayPSum() && winnerStay() !== 'houseBust'){
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


// deal button
    /*
        clear board
            put all cards in the trash array
        deal new cards
    */

const dealButton = document.getElementById('deal')
console.log(dealButton)

dealButton.addEventListener('click', nextRound)

function nextRound(evt){
    clearHand()
    clearBoard()
    deal()
    pCardDisplay()
    hCardDisplay()
    displayPSum()
    displayHSum()
}


// clear the hand and board

let trash = []

function clearHand(){
    playerHand.splice(0, playerHand.length)
    console.log(playerHand)

    houseHand.splice(0, houseHand.length)
}

function clearBoard(){
    for (let i=0; i< 7; i++){
        pHands.children[i].innerText = ''
        hHands.children[i].innerText = ''
    }
}


// display the deck count

function deckDisplay(){
    deckTotal.innerText = deck.length
}


// end game

function endGame(){
    if (playerLife <= 0){
        alert('You Lose')
    }
    if (houseLife <=0){
        alert('You Win')
    }
}


// get image




// this code works to put image in div and browser
        const cardDisplay = document.getElementById('cardDisplay')
        let img = new Image()
        let img2 = new Image()
        // let img = ''
        img.src = '../cards/AS.jpg';
        img2.src = '../cards/KH.jpg';
        console.log(img)

        pHand.append(img)
        hHand.append(img2)





// test to see how to produce image through loop and object
        // let deck2 = []

        // for (let i=0; i < suits.length; i++){
        //     for(let j = 0; j < numbers.length; j++){

            
        //         let card = {
        //             image: '../cards/' + numbers[j] + suits[i] + '.svg',
                    
        //         }
        //         deck2.push(card)          
        //     }
            
        // }

        // console.log(deck2)
        // let asdf = deck2.pop()
        // asdf = deck2.pop()
        // img.src = asdf.image

        // cardDisplay.append(img)
        // console.log(img)












// `https://deckofcardsapi.com/static/img/kh.png`
// img.src = 'cards/AS.svg';

// 'images/myFolder/' + i + '.png';





// function clearTest(){
//     for (let i=0; i<= playerHand.length; i++){
//         trash.push(playerHand.pop())
//     }
//     console.log(playerHand)
//     console.log(trash)

//     for (let i=0; i<= houseHand.length; i++){
//         trash.push(houseHand.pop())
//     }
//     console.log(houseHand)
//     console.log(trash)
// }



// function displayCardTest(){
//     cardDisplay.innerContent = 
// }



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

// let restart = location.reload()
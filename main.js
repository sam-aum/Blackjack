console.log('BlackJack')


// build the Deck

const suits = ['S', 'C', 'D', 'H']
const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

let deck = []
console.log(deck)

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

const houseDamage = document.getElementById('houseDamage')
const playerDamage = document.getElementById('playerDamage')
console.log(pHand)




// create cards then push to deck

for (let i=0; i < suits.length; i++){
    for(let j = 0; j < numbers.length; j++){

        let value = j + 2
        if (numbers[j] == 'J' || numbers[j] == 'Q' || numbers[j] == 'K'){
           value = 10;
        }
        if (numbers[j] == "A"){
                value = 11
            
            } 
            // if (value = 1 && displayPSum <= 21){
            //     value = 11
            // }
        

        let card = {
            number: numbers[j],
            suit: suits[i],
            value: value,
            image: './cards/' + numbers[j] + suits[i] + '.svg',
            
        }
        console.log(card.value + card.value)

        
        deck.push(card)
        
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
    if (playerLife <= 0 || houseLife <= 0){
        reload()
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
        dealButton.removeEventListener('click', nextRound)

    } else{
        shuffle()
        deal()

        //display cards
        pCardDisplay()
        firstHDisplay()

        //display sum
        displayPSum()
        

        //display deck count
        deckDisplay()
        dealButton.removeEventListener('click', nextRound)
        // checkAce()
    }

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

function pCardDisplay(){
    for (let i=0; i< playerHand.length; i++){
        // this produces text
            // pHands.children[i].innerText = playerHand[i].number + ' ' + playerHand[i].suit
        // this produces card images
            let img = new Image() 
            img.src = playerHand[i].image
            img.style.width = 125 +'px'
            console.log(img)
            pHands.children[i].appendChild(img)        
            
       
    }
}


function hCardDisplay(){
    for (let i=0; i< houseHand.length; i++){
        // hHands.children[i].innerText = houseHand[i].number + ' ' + houseHand[i].suit
        let img = new Image() 
        img.src = houseHand[i].image
        img.style.width = 125 +'px'
        console.log(img)
        hHands.children[i].appendChild(img)     
        
    }
}

function firstHDisplay(){
    let img = new Image();
    img.src = './cards/back.jpg';
    hHands.children[0].appendChild(img)

    let img2 = new Image() 
    img2.src = houseHand[1].image
    img2.style.width = 125 +'px'
    hHands.children[1].appendChild(img2)
}

// hit button

const hitButton = document.getElementById('hit')
console.log(hitButton)

hitButton.addEventListener('click', hitPlayer)

function hitPlayer(evt){
    dealButton.removeEventListener('click', nextRound)
    addCard()
    clearBoard()
    pCardDisplay()
    displayPSum()
    firstHDisplay()
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
    hitButton.removeEventListener('click', hitPlayer)
    standButton.removeEventListener('click', houseTurn)
    addHCard()
    clearBoard()
    pCardDisplay()
    hCardDisplay()
    displayPSum()
    displayHSum()    
    deckDisplay()
    winnerStay()
    stayDamage()
    endGame()
    dealButton.addEventListener('click', nextRound)
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
function winnerHit(evt){
    if (displayPSum() > 21){
        document.getElementById('winner').innerText = 'You Lose'
        clearBoard()
        hCardDisplay()
        displayHSum()
        pCardDisplay()
        displayPSum()
        hitButton.removeEventListener('click', hitPlayer)
        standButton.removeEventListener('click', houseTurn)
        dealButton.addEventListener('click', nextRound)
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
        hDamage(damage)
    }
    // win - if house busts 
    if (winnerStay() == 'houseBust'){
        let damage = displayHSum() - 21
        houseLife = houseLife - damage
        hDamage(damage)
    }
    // lose - house has higher value
    if (displayHSum() > displayPSum() && winnerStay() !== 'houseBust'){
        let damage = displayHSum() - displayPSum()
        playerLife = playerLife - damage
        pLife.innerText = playerLife
        pDamage(damage)
    }
    
    hLife.innerText = houseLife
    
    
}

function hitDamage(){
    if (winnerHit() == 'playerBust'){
        let damage = displayPSum() - 21
        playerLife = playerLife - damage 
        pDamage(damage)
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
    clearHSum()
    deal()
    pCardDisplay()
    firstHDisplay()
    displayPSum()
    
    houseDamage.classList.add('fade')
    playerDamage.classList.add('fade')
    hitButton.addEventListener('click', hitPlayer)
    standButton.addEventListener('click', houseTurn)
    dealButton.removeEventListener('click', nextRound)
}


// clear the hand and board and sum

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

function clearHSum(){
    hSum.innerText = ''
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


function hDamage(dam){
    houseDamage.classList.add('fade')
    setTimeout(function(){
        houseDamage.innerText = "-" + dam;
        houseDamage.classList.remove('fade');
        
    }, 300)
  
    

}


function pDamage(dam){
    playerDamage.classList.add('fade')
    setTimeout(function(){
        playerDamage.innerText = "-" + dam;
        playerDamage.classList.remove('fade');
        
    }, 300)
}


// Ace 1 or 11

// function checkAce(){
//     for (let i = 0; i <playerHand.length; i++){
//         if (playerHand[i] == (card.suit =='A')){
//             alert('Hello')
//         } 
//     }               
// }


// function ace(){
//     if (displayPSum > 21){
//         card.value = 1
//     }
// }






// this code works to put image in div and browser
        // const cardDisplay = document.getElementById('cardDisplay')
        // let img = new Image()
        // let img2 = new Image()
        // // let img = ''
        // img.src = './cards/AS.jpg';
        // img2.src = './cards/KH.jpg';
        // console.log(img)

        // pHand.append(img)
        // hHand.append(img2)





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
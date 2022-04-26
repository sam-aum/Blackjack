# Blackjack Battle
https://sam-aum.github.io/Blackjack/

![AS](https://user-images.githubusercontent.com/95770704/148798441-b7e5bf05-1eef-41f0-aadf-972cc456bd76.jpg)
![back](https://user-images.githubusercontent.com/95770704/148799365-7b3f6627-94eb-4496-b888-ed4b830b5a63.jpg)

## Description
Blackjack + Magic the Gathering

This game is Blackjack with Magic the Gathering mechanics in place of betting.
The player wins when the opponent's life counter reaches below 0.

## Rules
1. Deal initate Hand
2. Player can hit or stay
3. On computer's turn           
    - if house hand is < 17, add card value and display

4. determine and display winner
    - if player's cards greater than 21 then house wins.
    - if player's cards are > house cards, then player wins
    - if tie then tie
    - if player's cards are < house cards, then house wins

5. the betting / Life points

    - house and player have life points
    - player has cards with attack value
    - house has cards with attack value

    - loser takes damage
    - damage = difference of the sum of each players hand
        - ex. 21 - 18 = 3 loser takes 3 damage

    - if bust then busted player takes damage
        - bust damage = sum - 21

## MVP
- Build the Deck
- Create hand
- Grab html
- Create cards then push to deck
- Shuffle deck
- Start button
- Reload function
- Deal the hand
- Display the cards
- Hit button
- Stay button
- Add sum of card values and display
- work on css
    - two boards
    - create life points design
    - build hand location
    - create card sum location 


## Stretch Goals
- Create life points
- Assign damage
- Deal button
- Clear the hand and board
- Display the deck count
- End game
- Personalized cards 
- Sound effects

## Technology Used
- HTML
- CSS
- JavaScript

## Screenshots
![Screenshot 2022-04-26 141031](https://user-images.githubusercontent.com/95770704/165374623-cb756487-a955-436d-93f5-85fedefb9931.png)

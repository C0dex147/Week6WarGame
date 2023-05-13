//Game of War!

class Player {
    constructor(name){
        this.name = name;
        this.playerDeck = [];
    }

    drawCard = function() {
        if(this.playerDeck.length === 0) {
    return null;
    }
    return this.playerDeck.shift();
    }


    addCards = function(cards) {
    this.playerDeck.push(...cards);
    }

    hasCards = function(){
    return this.playerDeck.length > 0;
    }
}


class Card {
    constructor(suit, rank){
        this.rank = rank;
        this.suit = suit;
    }
getRankIndex = function() {
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    return ranks.indexOf(this.rank);
    }

}
class Deck{
    constructor() {
        this.cards = [];
    }
createDeck = function(){
    let suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        for (let suit of suits) {
            for( let rank of ranks) {
            this.cards.push(new Card(suit, rank));
        }
    }
}
shuffleDeck = function(){
    for(let i = this.cards.length -1; i > 0; i--) {
        let x = Math.floor(Math.random() * (i +1));
        [this.cards[i], this.cards[x]] = [this.cards[x], this.cards[i]];
        }
    }
}



compareCards = function(card1, card2) {
    let cardRank1 = card1.getRankIndex();
    let cardRank2 = card2.getRankIndex();
        if(cardRank1 > cardRank2) {
            return 1;
        }else if (cardRank1 < cardRank2) {
            return -1;
        }else {
            let warCards = [card1, card2];
            while (true) {
                if(!player1.hasCards() || !player2.hasCards()) {
                    break;
                }
                let player1WarCard = player1.drawCard();
                let player2WarCard = player2.drawCard();

                warCards.push(player1WarCard, player2WarCard);

                let resultOfWarTurn = compareCards(player1WarCard, player2WarCard);

                if(resultOfWarTurn > 0) {
                    player1.addCards(warCards);
                    return 1;
                }else if (resultOfWarTurn < 0) {
                    player2.addCards(warCards);
                    return -1;
                }
            }
            return 0;
        }
    }

let deck = new Deck();
deck.createDeck();
deck.shuffleDeck();

let player1 = new Player('Player 1');
let player2 = new Player('Player 2');
player1.playerDeck = deck.cards.slice(0, 26);
player2.playerDeck = deck.cards.slice(26);
 
//Game

let round = 1;

while(player1.hasCards() && player2.hasCards()) {
    console.log('It is round ' + round + '!');

    let player1Card = player1.drawCard();
    let player2Card = player2.drawCard();

   
        console.log(player1.name + ' draws ' + player1Card.rank + ' of ' + player1Card.suit);
        console.log(player2.name + ' draws ' + player2Card.rank + ' of ' + player2Card.suit);
            
        let resultOfTurn = compareCards(player1Card, player2Card);
           
        if(resultOfTurn > 0) {
                console.log(player1.name + ' wins');
                player1.addCards([player1Card, player2Card]);
        }else if (resultOfTurn < 0) {
                console.log(player2.name + ' wins');
                player2.addCards([player1Card, player2Card]);
        }
        
        if(player1.playerDeck.length === 52) {
            console.log(player1.name + ' wins the game!');
            break;
        
        }else if (player2.playerDeck.length === 52){
        console.log(player2.name + ' wins the game!');
        break;
    
    }
    round++;
}
    

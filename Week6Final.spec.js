const chai = require('chai');
const assert = chai.assert;

const {Deck} = require('./Week6Final.js').Deck;

describe('shuffleDeck', function(){
    it('should shuffle the cards in the deck randomly', function(){
        let deck = new Deck();
        deck.createDeck();

    let standardOrder = [...deck.cards];

    deck.shuffleDeck();

assert.notDeepEqual(deck.cards, standardOrder);
    });
});

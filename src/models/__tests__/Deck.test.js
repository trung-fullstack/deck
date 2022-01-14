import { CardValue } from 'models/CardValue';
import StandardDeck, { Deck } from 'models/Deck';
import { Suit, ALL_SUITS } from 'models/Suit';

const TEST_SUITS = [Suit.Diamonds, Suit.Hearts];
const TEST_CARD_VALUES = [CardValue.Ace, CardValue.Two];

describe('Deck', () => {
  describe('General Deck', () => {
    it('should print correct string', () => {
      const deck = new Deck([CardValue.Ace], [Suit.Diamonds]);
      const expetedString = `A Diamonds`;
      expect(deck.toString()).toEqual(expetedString);
    });

    it('should create correct sized deck', () => {
      const deck = new Deck(TEST_CARD_VALUES, TEST_SUITS);
      expect(deck.cardsLeft).toEqual(4);
    });

    it('should accept num of cards to deal at a time', () => {
      const deck = new Deck(TEST_CARD_VALUES, TEST_SUITS, 3);
      expect(deck.numOfCardsToDeal).toEqual(3);
    });

    it('should be able to shuffle any any time', () => {
      const deck1 = new Deck(TEST_CARD_VALUES, ALL_SUITS);
      const deck2 = new Deck(TEST_CARD_VALUES, ALL_SUITS);
      const deck3 = new Deck(TEST_CARD_VALUES, ALL_SUITS);
      const deck4 = new Deck(TEST_CARD_VALUES, ALL_SUITS);

      const isAllEqual =
        ((deck1.toString() === deck2.toString()) === deck3.toString()) === deck4.toString();

      expect(isAllEqual).toBe(false);
    });

    it('should deal correct num of cards', () => {
      const deck = new Deck(TEST_CARD_VALUES, TEST_SUITS, 3);
      const firstDeal = deck.deal();
      expect(firstDeal.length).toEqual(3);
    });

    it('should deal randomly', () => {
      const deck = new Deck(TEST_CARD_VALUES, ALL_SUITS, 1);
      let dealSeq = '';
      while (deck.cardsLeft) {
        dealSeq += deck.deal();
      }

      const deck2 = new Deck(TEST_CARD_VALUES, ALL_SUITS, 1);
      let dealSeq2 = '';
      while (deck2.cardsLeft) {
        dealSeq2 += deck2.deal();
      }

      expect(dealSeq).not.toEqual(dealSeq2);
    });

    it('should not contain any card from previous deal', () => {
      const deck = new Deck(TEST_CARD_VALUES, TEST_SUITS, 2);
      const firstDeal = deck.deal();
      const secondDeal = deck.deal();

      const hasIntersection = firstDeal.some((firstItem) =>
        secondDeal.find((secondItem) => secondItem.toString() === firstItem.toString())
      );

      expect(hasIntersection).toBe(false);
    });

    it('should be able to reset', () => {
      const deck = new Deck(TEST_CARD_VALUES, TEST_SUITS, 2);
      deck.deal();
      expect(deck.cardsLeft).toEqual(2);
      deck.reset();
      expect(deck.cardsLeft).toEqual(4);
    });

    it('should calculate correct number of card value', () => {
      const deck = new Deck(TEST_CARD_VALUES, TEST_SUITS, 1);

      expect(deck.getNumOfCardValue(CardValue.Ace)).toEqual(2);
      expect(deck.getNumOfCardValue(CardValue.Two)).toEqual(2);

      const firstDeal = deck.deal().pop();

      const otherValue = TEST_CARD_VALUES.filter((item) => item !== firstDeal.value).pop();
      expect(deck.getNumOfCardValue(firstDeal.value)).toEqual(1);
      expect(deck.getNumOfCardValue(otherValue)).toEqual(2);
    });
  });

  describe('Standard Deck', () => {
    it('should create 52 cards dec', () => {
      const deck = new StandardDeck();
      expect(deck.cardsLeft).toEqual(52);
    });

    it('should calculate correct number of Ace', () => {
      const deck = new StandardDeck(1);
      expect(deck.aceLeft).toEqual(4);
      let card = deck.deal().pop();
      while (card && !card.isValueOf(CardValue.Ace)) {
        card = deck.deal().pop();
      }
      expect(deck.aceLeft).toEqual(3);
    });

    it('should correctly determine ace in deals', () => {
      const deck = new StandardDeck(1);
      let card = deck.deal()[0];
      while (card && !card.isValueOf(CardValue.Ace)) {
        [card] = deck.deal();
      }

      expect(deck.isAceInDeal).toBe(true);
    });
  });
});

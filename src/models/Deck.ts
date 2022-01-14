import Card from './Card';
import { CardValue, CARD_RANKS } from './CardValue';
import { Suit, ALL_SUITS } from './Suit';

export class Deck {
  private cards: Card[] = [];

  private currDealtCards: Card[] = [];

  private availableCardValues: CardValue[];

  private availableSuits: Suit[];

  private cardsToDeal;

  constructor(cardValues: CardValue[], suits: Suit[], numOfCardsToDeal?: number) {
    this.availableCardValues = cardValues;
    this.availableSuits = suits;
    this.cardsToDeal = numOfCardsToDeal || 5;

    this.reset();
  }

  get cardsLeft() {
    return this.cards.length;
  }

  get numOfCardsToDeal() {
    return this.cardsToDeal;
  }

  get dealtCards() {
    return this.currDealtCards;
  }

  toString() {
    return this.cards.join(',');
  }

  getNumOfCardValue(value: CardValue): number {
    return this.cards.filter((card) => card.value === value).length;
  }

  reset() {
    this.cards = this.availableCardValues.flatMap((cardVal) =>
      this.availableSuits.map((suit) => new Card(cardVal, suit))
    );
    this.shuffle();
    this.currDealtCards = [];
  }

  shuffle() {
    this.cards = this.cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  deal() {
    this.currDealtCards = this.cards.splice(this.cardsToDeal * -1, this.cardsToDeal);
    this.shuffle();
    return this.currDealtCards;
  }
}

export default class StandardDeck extends Deck {
  constructor(numOfCardsToDeal?: number) {
    super(CARD_RANKS, ALL_SUITS, numOfCardsToDeal);
  }

  get aceLeft() {
    return this.getNumOfCardValue(CardValue.Ace);
  }

  get isAceInDeal() {
    return this.dealtCards.some((item) => item.value === CardValue.Ace);
  }
}

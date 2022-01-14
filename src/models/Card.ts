import { CardValue } from './CardValue';
import { Suit } from './Suit';

export default class Card {
  value: CardValue;

  suit: Suit;

  constructor(value: CardValue, suit: Suit) {
    this.suit = suit;
    this.value = value;
  }

  isValueOf(value: CardValue) {
    return this.value === value;
  }

  isSuitOf(suit: Suit) {
    return this.suit === suit;
  }

  toString() {
    return `${this.value} ${this.suit}`;
  }
}

import StandardDeck from './Deck';

export type GameInfo = {
  cardsLeft: number;
  aceLeft: number;
  isOver: boolean;
  status: GameStatus;
};

export enum GameStatus {
  WIN = 'WIN',
  LOOSE = 'LOOSE',
  PROGRESS = 'PROGRESS',
}

export default class Game {
  deck: StandardDeck;

  gameId: number;

  constructor() {
    this.gameId = 0;
    this.deck = new StandardDeck(5);
  }

  get cardsLeft() {
    return this.deck.cardsLeft;
  }

  get aceLeft() {
    return this.deck.aceLeft;
  }

  get dealtCards() {
    return this.deck.dealtCards;
  }

  get isOver() {
    return this.aceLeft === 0 || this.cardsLeft === 0;
  }

  get status() {
    if (this.deck.cardsLeft === 0) {
      return this.deck.isAceInDeal ? GameStatus.WIN : GameStatus.LOOSE;
    }

    if (this.aceLeft === 0) {
      return GameStatus.LOOSE;
    }

    return GameStatus.PROGRESS;
  }

  start() {
    this.gameId += 1;
    this.reset();
  }

  reset() {
    this.deck.reset();
    this.deck.deal();
  }

  deal() {
    return this.deck.deal();
  }

  toString() {
    return `Game ${this.gameId} is ${this.status}`;
  }
}

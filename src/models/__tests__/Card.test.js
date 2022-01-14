import Card from '../Card';
import { CardValue } from '../CardValue';
import { Suit } from '../Suit';

describe('Card', () => {
  it('should print correct string ', () => {
    const card = new Card(CardValue.Five, Suit.Diamonds);
    const expectedString = `5 Diamonds`;

    expect(card.toString()).toEqual(expectedString);
  });

  it('should check correct value of card ', () => {
    const card = new Card(CardValue.Five, Suit.Diamonds);
    expect(card.isValueOf(CardValue.Five)).toBe(true);
    expect(card.isValueOf(CardValue.Six)).toBe(false);
  });

  it('should check correct suit of card ', () => {
    const card = new Card(CardValue.Five, Suit.Diamonds);
    expect(card.isSuitOf(Suit.Diamonds)).toBe(true);
    expect(card.isSuitOf(Suit.Clubs)).toBe(false);
  });
});

import Game, { GameStatus } from 'models/Game';

describe('Game', () => {
  it('should create 52 cards deck game', () => {
    const game = new Game();
    expect(game.cardsLeft).toEqual(52);
  });

  it('should be able to deal cards', () => {
    const game = new Game();
    const cards = game.deal();

    expect(cards.length).toBeGreaterThan(0);
  });

  it('should store dealt cards', () => {
    const game = new Game();
    const cards = game.deal();

    expect(game.dealtCards.toString()).toEqual(cards.toString());
  });

  it('should be able to start game', () => {
    const game = new Game();
    const prevId = game.gameId;
    game.start();

    expect(game.gameId).toBeGreaterThan(prevId);
  });

  it('should be able to reset game', () => {
    const game = new Game();
    game.start();
    game.deal();
    const prevId = game.gameId;
    game.reset();
    expect(game.gameId).toEqual(prevId);
    expect(game.cardsLeft).toEqual(47);
  });

  it('should correctly calculate isOver', () => {
    const game = new Game();
    game.start();
    while (game.cardsLeft) {
      game.deal();
    }
    expect(game.isOver).toEqual(true);

    const game1 = new Game();
    game1.start();
    while (game1.aceLeft) {
      game1.deal();
    }
    expect(game1.isOver).toEqual(true);
  });

  it('should be correctly return status', () => {
    const game = new Game();
    game.start();
    expect(game.status).toEqual(GameStatus.PROGRESS);

    while (game.cardsLeft > 2) {
      game.deal();
    }

    if (game.aceLeft > 0) {
      expect(game.status).toEqual(GameStatus.WIN);
    } else {
      expect(game.status).toEqual(GameStatus.LOOSE);
    }
  });

  it('should print correctly', () => {
    const game = new Game();
    game.start();
    const { gameId, status } = game;

    expect(game.toString().includes(gameId));
    expect(game.toString().includes(status));
  });
});

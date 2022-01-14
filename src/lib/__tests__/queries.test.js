import { useDealCards, useGameInfo, useGameDeal, useGameReset, useGameStart } from 'lib/queries';
import GameSingleton from 'lib/singleton';
import { testUseQuery, testUseMutation } from 'lib/test-utils';

describe('queries', () => {
  describe('useDealCards', () => {
    it('request successful with no filter arguments', async () => {
      GameSingleton.reset();
      const { result, waitFor: waitForHook } = testUseQuery(useDealCards);
      await waitForHook(() => result.current.isSuccess);

      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBe(null);
      expect(result.current.data.toString()).toEqual(GameSingleton.dealtCards.toString());
    });
  });

  describe('useGameInfo', () => {
    it('request successful with no filter arguments', async () => {
      const { result, waitFor: waitForHook } = testUseQuery(useGameInfo);
      await waitForHook(() => result.current.isSuccess);

      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBe(null);
      expect(result.current.data.cardsLeft).toEqual(GameSingleton.cardsLeft);
    });
  });

  describe('useGameDeal', () => {
    it('request successful with no filter arguments', async () => {
      GameSingleton.reset();
      const { result, waitFor: waitForHook } = testUseMutation(useGameDeal);
      result.current.mutate();
      await waitForHook(() => result.current.isSuccess);
      expect(GameSingleton.dealtCards.length).toEqual(5);
    });
  });

  describe('useGameStart', () => {
    it('request successful with no filter arguments', async () => {
      const { gameId } = GameSingleton;
      const { result, waitFor: waitForHook } = testUseMutation(useGameStart);
      result.current.mutate();
      await waitForHook(() => result.current.isSuccess);
      expect(GameSingleton.gameId).not.toEqual(gameId);
    });
  });

  describe('useGameReset', () => {
    it('request successful with no filter arguments', async () => {
      GameSingleton.deal();
      GameSingleton.deal();
      const { cardsLeft } = GameSingleton;
      const { result, waitFor: waitForHook } = testUseMutation(useGameReset);
      result.current.mutate();
      await waitForHook(() => result.current.isSuccess);
      expect(cardsLeft).not.toEqual(47);
      expect(GameSingleton.cardsLeft).toEqual(47);
    });
  });
});

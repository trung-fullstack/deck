import { useQuery, UseQueryResult, useQueryClient, useMutation } from 'react-query';
import Card from 'models/Card';
import { GameInfo } from 'models/Game';
import GameSingleton from './singleton';

export const QUERY_KEYS = {
  GET_DEAL_CARDS: 'dealCards',
  GET_GAME_INFO: 'aceLeft',
};

export const useDealCards = (): UseQueryResult<Card[]> => {
  return useQuery(QUERY_KEYS.GET_DEAL_CARDS, async () => {
    return GameSingleton.dealtCards;
  });
};

export const useGameInfo = (): UseQueryResult<GameInfo> => {
  return useQuery(QUERY_KEYS.GET_GAME_INFO, async () => {
    const { cardsLeft, aceLeft, isOver, status } = GameSingleton;
    return { cardsLeft, aceLeft, isOver, status };
  });
};

export const useGameStart = () => {
  const queryClient = useQueryClient();
  return useMutation(async () => {
    GameSingleton.start();
    queryClient.invalidateQueries();
  });
};

export const useGameReset = () => {
  const queryClient = useQueryClient();
  return useMutation(async () => {
    GameSingleton.reset();
    queryClient.invalidateQueries();
  });
};

export const useGameDeal = () => {
  const queryClient = useQueryClient();
  return useMutation(async () => {
    GameSingleton.deal();
    queryClient.invalidateQueries();
  });
};

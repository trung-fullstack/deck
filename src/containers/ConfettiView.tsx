import Confetti from 'react-confetti';
import { useGameInfo } from 'lib/queries';
import { GameStatus } from 'models/Game';

export default function ConfettiView() {
  const { isError, isLoading, data } = useGameInfo();

  if (isError || isLoading) {
    return null;
  }

  const { status } = data || {
    cardsLeft: 0,
    aceLeft: 0,
    isOver: true,
    status: GameStatus.PROGRESS,
  };

  return status === GameStatus.WIN ? <Confetti /> : null;
}

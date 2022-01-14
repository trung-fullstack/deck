import React from 'react';
import Button from 'components/Button';
import SecondaryButton from 'components/SecondaryButton';
import { useGameInfo, useGameDeal, useGameReset, useGameStart } from 'lib/queries';
import { GameStatus } from 'models/Game';

const ControlView: React.FC = () => {
  const { isError, isLoading, data } = useGameInfo();
  const { mutate: deal } = useGameDeal();
  const { mutate: reset } = useGameReset();
  const { mutate: start } = useGameStart();

  if (isError || isLoading) {
    return <div>Loading...</div>;
  }

  const { isOver, status } = data || {
    cardsLeft: 0,
    aceLeft: 0,
    isOver: true,
    status: GameStatus.PROGRESS,
  };

  const isWin = status === GameStatus.WIN;

  return !isOver ? (
    <div className="flex flex-col w-full justify-center items-center p-6 flex-1 relative">
      <div className="pb-6">
        <Button onClick={() => deal()}>DEAL</Button>
      </div>

      <div className="relative xl:absolute 2xl:absolute right-0 bottom-0">
        <SecondaryButton onClick={() => reset()}>Reset</SecondaryButton>
      </div>
    </div>
  ) : (
    <div className="flex flex-col w-full p-6  justify-center items-center flex-1 relative">
      {!isWin && (
        <div className="text-white text-center w-[400px] text-3xl mb-6">
          You lose. <br /> Better luck next time!
        </div>
      )}
      <div>
        <SecondaryButton onClick={() => start()}>Play Again</SecondaryButton>
      </div>
    </div>
  );
};

export default ControlView;

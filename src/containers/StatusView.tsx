import { motion } from 'framer-motion';
import React from 'react';
import WinnerImage from 'assets/winner.svg';
import CounterCard from 'components/CounterCard';
import { useGameInfo } from 'lib/queries';
import { GameStatus } from 'models/Game';

const StatusView: React.FC = () => {
  const { isError, isLoading, data } = useGameInfo();

  if (isError || isLoading) {
    return <div>Loading...</div>;
  }

  const { cardsLeft, aceLeft, status } = data || {
    cardsLeft: 0,
    aceLeft: 0,
    isOver: true,
    status: GameStatus.PROGRESS,
  };

  const isWin = status === GameStatus.WIN;

  return (
    <div className="flex w-full justify-center relative overflow-visible">
      <CounterCard value={cardsLeft} name="Card" namePlural="Cards" />
      <CounterCard value={aceLeft} name="Ace" namePlural="Aces" />
      {isWin && (
        <motion.div
          className="absolute top-1/2"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.7 }}
        >
          <img src={WinnerImage} alt="winner" className="w-full" />
        </motion.div>
      )}
    </div>
  );
};

export default StatusView;

import React from 'react';
import CardComponent from 'components/Card';
import { useDealCards } from 'lib/queries';
import Card from 'models/Card';

const MOBILE_MOVE_SET = {
  FULL: [
    {
      move: {
        x: 14,
        y: 110,
        rotate: 0,
      },
      delay: 0.1,
    },
    {
      move: {
        x: 127,
        y: 110,
        rotate: 0,
      },
      delay: 0.2,
    },
    {
      move: {
        x: 240,
        y: 110,
        rotate: 0,
      },
      delay: 0.3,
    },
    {
      move: {
        x: 72,
        y: 264,
        rotate: 0,
      },
      delay: 0.4,
    },
    {
      move: {
        x: 185,
        y: 264,
        rotate: 0,
      },
      delay: 0.5,
    },
  ],
  FINAL: [
    {
      move: {
        x: 72,
        y: 264,
        rotate: 0,
      },
      delay: 0.1,
    },
    {
      move: {
        x: 185,
        y: 264,
        rotate: 0,
      },
      delay: 0.2,
    },
  ],
};

const MOVE_SET = {
  FULL: [
    {
      move: {
        x: -420,
        y: 120,
        rotate: 10,
      },
      delay: 0.1,
    },
    {
      move: {
        x: -210,
        y: 146,
        rotate: 5,
      },
      delay: 0.2,
    },
    {
      move: {
        x: 0,
        y: 155,
        rotate: 0,
      },
      delay: 0.3,
    },
    {
      move: {
        x: 210,
        y: 146,
        rotate: -5,
      },
      delay: 0.4,
    },
    {
      move: {
        x: 420,
        y: 120,
        rotate: -10,
      },
      delay: 0.5,
    },
  ],
  FINAL: [
    {
      move: {
        x: -100,
        y: 150,
        rotate: 0,
      },
      delay: 0.1,
    },
    {
      move: {
        x: 100,
        y: 150,
        rotate: 0,
      },
      delay: 0.2,
    },
  ],
};

const DeckView: React.FC = () => {
  const { isError, isLoading, data } = useDealCards();

  if (isError || isLoading) {
    return <div>Loading...</div>;
  }

  const isXl = window.innerWidth >= 1280;

  const targetMove = isXl ? MOVE_SET : MOBILE_MOVE_SET;
  const cards = data as Card[];
  const moves = cards.length > 2 ? targetMove.FULL : targetMove.FINAL;

  return (
    <div className="h-deck-sm xl:h-deck 2xl:h-deck flex justify-center relative">
      <div className="w-full h-full" key={data?.toString()}>
        {cards.map((card, index) => {
          return (
            <CardComponent
              key={card.toString()}
              card={card}
              move={moves[cards.length - 1 - index].move}
              delay={moves[cards.length - 1 - index].delay}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DeckView;

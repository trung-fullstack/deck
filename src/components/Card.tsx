import { motion } from 'framer-motion';
import CloverImage from 'assets/Clover.svg';
import DiamondImage from 'assets/Diamond.svg';
import HeartImage from 'assets/Heart.svg';
import SpadeImage from 'assets/Spade.svg';
import Card from 'models/Card';
import { Suit } from 'models/Suit';

const Images: Map<Suit, string> = new Map([
  [Suit.Diamonds, DiamondImage],
  [Suit.Clubs, CloverImage],
  [Suit.Spades, SpadeImage],
  [Suit.Hearts, HeartImage],
]);

const Colors: Map<Suit, string> = new Map([
  [Suit.Diamonds, 'red'],
  [Suit.Clubs, 'black'],
  [Suit.Spades, 'black'],
  [Suit.Hearts, 'red'],
]);

type CardComponentProps = {
  card: Card;
  delay?: number;
  move?: {
    rotate?: number;
    x?: number;
    y?: number;
  };
};

export default function CardComponent({ card, move, delay }: CardComponentProps) {
  const textColor = `text-${Colors.get(card.suit)}`;
  return (
    <motion.div
      initial={{
        x: 0,
        y: -350,
        rotate: 0,
      }}
      animate={move}
      transition={{
        ease: 'easeIn',
        duration: 0.4,
        delay,
      }}
    >
      <div
        className="
          absolute
          top-0
          left-0
          xl:left-[492px]
          2xl:left-[492px]
          w-card-sm
          h-card-sm
          xl:w-card
          2xl:w-card
          xl:h-card
          2xl:h-card
          rounded-xl
          bg-white
          px-2
          pt-2
          pb-4
          xl:px-6
          xl:pt-6
          xl:pb-8
          2xl:px-6
          2xl:pt-6
          2xl:pb-8
          flex
          flex-col
          tems-start
          shadow-lg"
      >
        <div className="flex flex-col items-center pb-2 w-fit flex-1">
          <h1
            className={`
              font-extrabold 
              text-3xl 
              xl:text-6xl 2xl:text-6xl 
              pb-0 
              xl:pb-1 2xl:pb-1
              ${textColor}`}
          >
            {card.value}
          </h1>
          <img
            src={Images.get(card.suit)}
            alt={`${card.suit}`}
            className="w-[16px] xl:w-[36px] 2xl:w-[36px]"
          />
        </div>

        <div className="self-stretch flex justify-end items-center">
          <img
            src={Images.get(card.suit)}
            alt={`${card.suit}`}
            className="w-[50px] xl:w-[90px] 2xl:w-[90px]"
          />
        </div>
      </div>
    </motion.div>
  );
}

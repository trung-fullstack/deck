import React from 'react';
import ConfettiView from 'containers/ConfettiView';
import ControlView from 'containers/ControlView';
import DeckView from 'containers/DeckView';
import StatusView from 'containers/StatusView';

const Home: React.FC = () => {
  return (
    <div className="w-deck-sm xl:w-deck 2xl:w-deck flex flex-col mx-auto min-h-screen py-6">
      <ConfettiView />
      <StatusView />
      <DeckView />
      <ControlView />
    </div>
  );
};

export default Home;

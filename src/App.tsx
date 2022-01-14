import React, { useEffect } from 'react';
import { useGameStart } from 'lib/queries';
import Home from 'pages/Home';

const App: React.FC = () => {
  const { mutate: startGame } = useGameStart();

  useEffect(() => {
    startGame();
  }, [startGame]);

  return (
    <div className="bg-green-600 overflow-hidden" data-testid="App">
      <Home />
    </div>
  );
};

export default App;

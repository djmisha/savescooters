import React from 'react';
import ScooterLogo from './Scooter';
import {VotingChoices, VoteCounter} from './Vote';

import './styles.css';

function App() {
  return (
    <div className="scooter__app">
      <header className="scooter__header">
        <VoteCounter />
      </header>
      <main>
        <ScooterLogo />
      </main>
      <footer>
        <VotingChoices />
      </footer>
    </div>
  );
}


export default App;

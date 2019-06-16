import React from 'react';
import ScooterLogo from './Scooter';
import {VotingChoices, VoteCounter} from './Vote';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

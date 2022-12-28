import React, {Components} from 'react';
import logo from './logo.svg';
import './App.css';
import { TopNav } from './topNav';
import {BalanceCard} from './balanceCard';
import { SocialCardSection } from './SocialCardSection';
import { Interface } from './Interface';
import { Cashout } from './Cashout';

function App() {
  return (
    <div className="App">
       <TopNav />
        <BalanceCard />
        <Interface />
        <Cashout />
        <SocialCardSection />
    </div>
  );
}

export default App;

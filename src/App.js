import React, { useState } from 'react';
import './App.css';
import TicketContainer from './components/TicketContainer';
import BetCash from './components/BetCash';
import Details from './components/Details';

const choices = 5;
const maxNumbers  = 20;

function App() {

  const [tokens, setTokens] = useState([...defaultTokens]);
  const [disableCash, setdisableCash] = useState(false);
  const [cash, setCash] = useState(0);

  const initialCashValue = (disableCash = false) => {
    setCash(0);
    setdisableCash(disableCash);
  }

  const onRandomButtonClicked = () => {
    setTokens(randomNumbers(tokens));
    initialCashValue(true);
  }

  const onClearClicked = () => {
    const defaults = tokens.map(t => ({
      ...t,
      selected: false
    }))
    setTokens(defaults);
    initialCashValue();
  }

  const onCashClicked = (value = 0) => {
    if (disableCash) {
      const updatedCash = cash + value;
      setCash(updatedCash);
    } else {
      alert('You have not selected five numbers');
    }
  }

  const toggleTokenSelection = (token) => {
    if (!token.selected) {
      if (canSelectTokens(tokens)) {
        const updatedTokens = toggleSelection(token, tokens);
        setTokens(updatedTokens);
        if (!canSelectTokens(tokens)) {
          setdisableCash(true);
        }
      } else {
        alert('Ooopss....! Only 5 number allowed');
      }
    } else {
      const updatedTokens = toggleSelection(token, tokens);
      setTokens(updatedTokens);
      initialCashValue();
    }
  }

  return (
    <div className="container">
      <h1 className="header">Whe Whe Lottery</h1>
      <div className="row" >
        <TicketContainer tokens={tokens}
          toggleTokenSelection={toggleTokenSelection}
          onClearClicked={onClearClicked}
          onRandomButtonClicked={onRandomButtonClicked}
          disableCash={disableCash} />
          <BetCash disableCash={disableCash} onCashClicked={onCashClicked} />
        <Details tokens={tokens.filter(t => t.selected)} cash={cash} />
      </div>      
    </div>
  );
}

const defaultTokens = [...Array(maxNumbers).keys()].map(v => ({
  value: v+1,
  selected: false
}));

const canSelectTokens = (tokens = []) => {
  return tokens.filter(t => t.selected).length < choices;
}

const randomNumbers = (allTokens) => {
  const RANDOM_NUMBER_COUNT = 5;
  const randomNumbers = [];
  while (randomNumbers.length < RANDOM_NUMBER_COUNT) {
    let r = Math.floor(Math.random() * maxNumbers) + 1;
    if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
  }
  return allTokens.map(({ value }) => ({
    value,
    selected: randomNumbers.includes(value)
  }));
}

const toggleSelection = (token, tokens = []) => {
  const { value, selected } = token;
  const updatedTokens = [...tokens];
  const tempToken = updatedTokens.find(t => t.value === value);
  tempToken.selected = !selected;
  return updatedTokens;
}

export default App;
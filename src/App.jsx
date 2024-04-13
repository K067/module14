import React from 'react';
import './App.css';
import { Counter } from './Counter/Counter';
import { useContent } from './Components/Hook/useContent';
import { Context } from './Components/Functions/context';


function App() {
  const state = useContent();

  return (
    <Context.Provider value={{
      state
    }
    }>
      <div className="container">
        <div className="wrapper">
          <h3>Teler</h3>
          <Counter />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;

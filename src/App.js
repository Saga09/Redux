import React from 'react';
import Counter from './Counter';
import AddCounter from './AddCounter';
import RemoveCounter from './RemoveCounter';
// import './App.css';

function App() {
  return (
    <div className="App">
        <div className="container">
            <Counter></Counter><br />
            <div className="columns">
                <div className="column is-11">
                    <AddCounter></AddCounter>
                </div>
                <div className="column auto">
                    <RemoveCounter></RemoveCounter>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

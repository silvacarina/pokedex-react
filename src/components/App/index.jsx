import React from 'react';
import Title from '../Title';
import Pokemon from '../Pokemon';
import './style.css';

function App() {
  return (
    <div className="container">
      <Title />
      <ul className="pokedex">
        {
          Array(12).fill().map((_, index) => {
            const id = index + 1;
            return (
              <Pokemon key={id} id={id} />
            );
          })
        }
      </ul>
    </div>
  );
}

export default App;

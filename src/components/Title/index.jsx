import React from 'react';
import './style.css';
import pokedeximg from './pokedex.png';

function Logo() {
  return (
    <div className="title-container">
      <img className="title-img" src={pokedeximg} alt="Imagem de uma pokedex" />
      <h1 className="title">Pokedex</h1>
    </div>
  );
}

export default Logo;

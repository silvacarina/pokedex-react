import propTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import './style.css';

function Pokemon({ id }) {
  const [pokemon, setPokemon] = useState({});

  const fetchPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const elementTypes = pokemon?.types?.map((typeInfo) => typeInfo.type.name) || [];

  return (
    <li className={`card ${elementTypes[0]}`}>
      <img className="card-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={pokemon.name} />
      <h2 className="card-title">{ pokemon.name }</h2>
      <p className="card-subtitle">{elementTypes.join(' | ')}</p>
    </li>
  );
}

Pokemon.propTypes = {
  id: propTypes.number.isRequired,
};

export default Pokemon;

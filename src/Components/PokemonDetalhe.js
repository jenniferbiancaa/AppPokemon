import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchPokemonData } from '../api';

const PokemonDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokemonImage = styled.img`
  max-width: 200px;
  cursor: pointer; /* Adicionando cursor pointer para indicar que a imagem é clicável */
`;

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonData();
      const selectedPokemon = data.find((p) => p.id === parseInt(id));
      setPokemon(selectedPokemon);
    };

    fetchData();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <PokemonDetailsContainer>
      <Link to="/"> {/* Adicionando Link para levar de volta para a página Home */}
        <PokemonImage src={pokemon.img} alt={pokemon.name} />
      </Link>
      <div>
        <h2>{pokemon.name}</h2>
        <div>Type: {pokemon.type.join(', ')}</div>
        <div>Height: {pokemon.height}</div>
        <div>Weight: {pokemon.weight}</div>
        <div>Weaknesses: {pokemon.weaknesses.join(', ')}</div>
      </div>
    </PokemonDetailsContainer>
  );
};

export default PokemonDetail;

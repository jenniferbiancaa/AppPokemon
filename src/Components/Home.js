import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPokemonData } from '../api';

const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const PokemonCard = styled.div`
  border: 1px solid #ccc;
  border-bottom: none;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  background-color: ${(props) => getColorByType(props.type)};
`;

const PokemonImage = styled.img`
  max-width: 100px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const PokemonName = styled.div`
  /* Estilos adicionais para o nome do Pokémon, se necessário */
`;

// Função para obter a cor de acordo com o tipo do Pokémon
const getColorByType = (type) => {
  switch (type) {
    case 'Grass':
      return '#78C850';
    case 'Fire':
      return '#F08030';
    case 'Water':
      return '#6890F0';
    case 'Electric':
      return '#F8D030';
    case 'Bug':
      return '#A8B820';
    // Adicione outros tipos e suas cores aqui
    default:
      return '#ccc';
  }
};

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonData();
      setPokemonList(data);
    };

    fetchData();
  }, []);

  return (
    <PokemonGrid>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} type={pokemon.type[0]}>
          <Link to={`/pokemon/${pokemon.id}`}>
            <PokemonImage src={pokemon.img} alt={pokemon.name} />
          </Link>
          <PokemonName>{pokemon.name}</PokemonName>
        </PokemonCard>
      ))}
    </PokemonGrid>
  );
};

export default Home;

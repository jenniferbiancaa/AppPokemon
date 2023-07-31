import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { fetchPokemonData } from '../api';

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const PokemonCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  background-color: ${(props) => getColorByType(props.type)};

  img {
    max-width: 100px;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const SearchTitle = styled.h1`
  font-size: 24px;
  margin-right: 10px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
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

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    if (value.trim() !== '') {
      const data = await fetchPokemonData();
      const results = data.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(value.toLowerCase()) ||
          pokemon.type.some((type) => type.toLowerCase().includes(value.toLowerCase()))
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <SearchWrapper>
        <SearchTitle>Pesquisar Pokemon</SearchTitle>
        <SearchInput type="text" placeholder="Pesquisar Pokemon" value={searchTerm} onChange={handleSearch} />
      </SearchWrapper>
      <SearchContainer>
        {searchResults.map((pokemon) => (
          <PokemonCard key={pokemon.id} type={pokemon.type[0]}>
            <Link to={`/pokemon/${pokemon.id}`}>
              <img src={pokemon.img} alt={pokemon.name} />
            </Link>
            <div>{pokemon.name}</div>
          </PokemonCard>
        ))}
      </SearchContainer>
    </>
  );
};

export default Search;

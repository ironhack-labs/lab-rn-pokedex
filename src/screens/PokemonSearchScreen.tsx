// src/screens/PokemonSearchScreen.tsx
import React, {useState, useContext} from 'react';
import {View, TextInput, Text} from 'react-native';
import {PokemonContext} from '../context/PokemonContext';
import useFetch from '../hooks/useFetch';
import PokemonList from '../components/PokemonList';

const PokemonSearchScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const {state} = useContext(PokemonContext);
  const {pokemons} = state;
  const {data, error} = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151');

  if (error) {
    console.error('Error fetching Pokémon data:', error);
  }

  // Extract the list of Pokémon names from the data
  const pokemonNames =
    data?.results.map((pokemon: {name: string}) =>
      pokemon.name.toLowerCase(),
    ) || [];

  // Filter the list of Pokémon based on the search query
  const filteredPokemons = pokemons.filter(pokemon => {
    const pokemonName = pokemon.name.toLowerCase();
    return pokemonName.includes(searchQuery.toLowerCase());
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <View>
      <Text style={{color: '#000000'}}>Search Pokémon by name:</Text>
      <TextInput
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder="Enter Pokémon name"
        placeholderTextColor="#000000"
      />
      <PokemonList pokemons={filteredPokemons} onPokemonPress={() => {}} />
    </View>
  );
};

export default PokemonSearchScreen;

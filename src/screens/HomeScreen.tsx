// src/screens/HomeScreen.tsx
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { PokemonContext } from '../context/PokemonContext';
import useFetch from '../hooks/useFetch';
import PokemonList from '../components/PokemonList';

interface Props {
  navigation: any; // Replace 'any' with the appropriate type for navigation
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { state } = useContext(PokemonContext);
  const { data, loading } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemons = data?.results || [];

  const handlePokemonPress = (pokemon: any) => {
    navigation.navigate('PokemonDetail', { name: pokemon.name });
  };

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <PokemonList pokemons={pokemons} onPokemonPress={handlePokemonPress} />
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;

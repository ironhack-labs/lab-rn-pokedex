import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {usePokemonContext} from '../context/PokemonContext';
import PokemonList from '../components/PokemonList';
import styles from '../styles';

const HomeScreen: React.FC = () => {
  const {state} = usePokemonContext();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Pokédex!</Text>
      <PokemonList pokemons={state.pokemonList} />
    </View>
  );
};

export default HomeScreen;

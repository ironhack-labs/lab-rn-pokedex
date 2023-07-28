import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {usePokemonContext} from '../context/pokemonContext';
import PokemonList from '../components/pokemonList';
import styles from '../styles/styles';

const homeScreen = () => {
  const {state} = usePokemonContext();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a la pokedex!</Text>
      <PokemonList pokemons={state.pokemonList} />
    </View>
  );
};
export default homeScreen;
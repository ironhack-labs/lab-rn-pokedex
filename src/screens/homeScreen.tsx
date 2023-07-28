import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PokeImg from '../../img/PokeImg';
import PokemonList from '../components/pokemonList';
import { usePokemonContext } from '../context/pokemonContext';
import styles from '../styles/styles';

const homeScreen = () => {
  const {state} = usePokemonContext();

  return (
    <SafeAreaView style={styles.container}>
      <PokeImg />
      <Text style={styles.text}>Bienvenido a la pokedex!</Text>
      <PokemonList pokemons={state.pokemonList} />
    </SafeAreaView>
  );
};
export default homeScreen;

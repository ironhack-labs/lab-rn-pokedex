import React from 'react';
import {View, Text} from 'react-native';
import {usePokemonContext} from '../context/PokemonContext';
import PokemonList from '../components/PokemonList';
import styles from '../styles';

const HomeScreen: React.FC = () => {
  const {state} = usePokemonContext();

  return (
    <View style={styles.container}>
      {state.myPokemons.length > 0 && (
        <>
          <Text style={styles.text}>My Pokemons!</Text>
          <PokemonList pokemons={state.myPokemons} />
        </>
      )}
      <Text style={styles.text}>Welcome to the Pokédex!</Text>
      <PokemonList pokemons={state.pokemonList} />
    </View>
  );
};

export default HomeScreen;

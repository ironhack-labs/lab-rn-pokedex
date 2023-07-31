import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {useFetch} from '../hooks/useFetch';
import PokemonList from '../components/PokemonList';

type Props = {};

export const HomeScreen = (props: Props) => {
  const pokemons = useFetch();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.headerHome}>Pokedex: {pokemons?.length}</Text>
      <PokemonList data={pokemons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerHome: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 25,
  }
});


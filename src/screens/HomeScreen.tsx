import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';
import PokemonList from '../components/PokemonList';
import useFetch from '../hooks/useFetch';
import { Pokemon } from '../context/types/Pokemon';

const HomeScreen = () => {
  const { state, dispatch } = useAppContext();

  const { data: pokemons, loading, error } = useFetch<Pokemon[]>(
    'https://pokeapi.co/api/v2/pokemon?limit=10'
  );
  console.log('pokemons from API:', pokemons);

  useEffect(() => {
    if (pokemons && pokemons.length > 0) {
      dispatch({ type: 'FETCH_POKEMONS_SUCCESS', payload: pokemons });
    }
  }, [pokemons, dispatch]);

  console.log('state.pokemons:', pokemons);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokemon List</Text>
      <PokemonList pokemons={state.pokemons} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;

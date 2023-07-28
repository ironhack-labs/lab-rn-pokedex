import {FlatList, SafeAreaView, ScrollView, Text} from 'react-native';
import React, {useEffect} from 'react';
import {usePokeContextProvider} from '../context/usePokemon';
import {fetchPokemonDescription} from '../hooks/useFetchPokemon';
import PokemonList from '../components/PokemonList';

const HomeScreen = () => {
  const {pokeInfo, fetchPoke} = usePokeContextProvider();

  useEffect(() => {
    fetchPoke();
  }, []);

  return (
    <SafeAreaView>
      <PokemonList pokelist={pokeInfo} />
    </SafeAreaView>
  );
};

export default HomeScreen;

import { FlatList, SafeAreaView, ScrollView, Text } from 'react-native';
import React, { useEffect } from 'react';
import { usePokeContextProvider } from '../context/usePokemon';
import { fetchPokemonDescription } from '../hooks/useFetchPokemon';

const HomeScreen = () => {
  const {pokeInfo, fetchPoke} = usePokeContextProvider();

  useEffect(() => {
    console.log('entor')
    fetchPokemonDescription("https://pokeapi.co/api/v2/pokemon-form/1/")
    fetchPoke()
  }, [])

  return (
    <SafeAreaView>
      {pokeInfo && (
        <FlatList
          data={pokeInfo}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={item => item.name}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

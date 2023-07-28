import { FlatList, SafeAreaView, ScrollView, Text } from 'react-native';
import React, { useEffect } from 'react';
import { usePokeContextProvider } from '../context/usePokemon';
import { PokeInfo } from '../interface/PokeTypes';

const HomeScreen = () => {

  const { pokeInfo, fetchPoke } = usePokeContextProvider()

  useEffect(() => {
    console.log('entor')
    fetchPoke()
  }, [])

  return (
    <SafeAreaView>
      {pokeInfo && (
        <FlatList
          data={pokeInfo}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeAreaView>
  );
};


export default HomeScreen;

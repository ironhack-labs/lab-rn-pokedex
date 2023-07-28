import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {Pokemon, useFetch} from '../hooks/useFetch';

type Props = {};

export const HomeScreen: React.FC<void> = (props: Props) => {
  const pokemons = useFetch();
  console.log(pokemons);
  // useEffect(() => {
  //   async function getPokemons() {
  //     const data = await useFetch();
  //   }

  //   getPokemons();
  // }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Text>Pokemons in List: {pokemonList?.length}</Text>

      <FlatList
        data={pokemonList}
        contentContainerStyle={{flex: 1}}
        renderItem={({item}) => <Text>{item.name}</Text>}
      /> */}
    </SafeAreaView>
  );
};

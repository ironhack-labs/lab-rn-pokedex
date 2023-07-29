import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {Pokemon, useFetch} from '../hooks/useFetch';
import PokemonList from '../src/components/PokemonList';

type Props = {};

export const HomeScreen = (props: Props) => {
  const pokemons = useFetch();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Pokedex: {pokemons?.length}</Text>
      <PokemonList data={pokemons} />
    </SafeAreaView>
  );
};

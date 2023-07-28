import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import type {PokemonDetails} from '../../models';
import {NavigationProps} from '../../navigation/app-navigator.types';

type PokemonDetailProps = {pokemon: PokemonDetails};

// TODO: add styles later
export const PokemonDetail = ({pokemon}: PokemonDetailProps) => {
  const {navigate} = useNavigation<NavigationProps>();

  return (
    <View>
      <Text>name: {pokemon.name}</Text>
      <Text>type: {pokemon.types?.[0].type.name}</Text>
      <Button title="Add Pokemon" onPress={() => navigate('AddPokemon')} />
    </View>
  );
};

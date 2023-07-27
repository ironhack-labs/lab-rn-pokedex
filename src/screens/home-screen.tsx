import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import type {HomeScreenProps} from '../navigation/app-navigator.types';
import {usePokemonCtx} from '../context';

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {pokemons} = usePokemonCtx();

  return (
    <View>
      <FlatList
        contentContainerStyle={{rowGap: 20}}
        data={pokemons}
        renderItem={({item: pokemon}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('PokemonDetail', {pokemon})}>
            <Text>{pokemon.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

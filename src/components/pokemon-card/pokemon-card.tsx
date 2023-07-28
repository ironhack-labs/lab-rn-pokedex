import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import type {Pokemon} from '../../models';
import {NavigationProps} from '../../navigation/app-navigator.types';
import {pokemonCardStyles} from './pokemon-card.styles';

type PokemonCardProps = Pokemon;

export const PokemonCard = ({name, thumbnail, id}: PokemonCardProps) => {
  const {navigate} = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity
      style={pokemonCardStyles.button}
      activeOpacity={0.8}
      onPress={() => navigate('PokemonDetail', {pokemonId: id})}>
      <View style={pokemonCardStyles.card}>
        <Text style={pokemonCardStyles.pokemonName}>{name}</Text>
        <Text style={pokemonCardStyles.pokemonNumber}>#{id}</Text>
        {/* NOTE: add styles later, and check if the femsa VPN block the thumbnail */}
        <Image
          source={{uri: thumbnail}}
          style={pokemonCardStyles.pokemonImage}
        />
      </View>
    </TouchableOpacity>
  );
};

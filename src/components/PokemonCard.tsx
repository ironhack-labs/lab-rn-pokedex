import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';


import {Pokemon} from '../interfaces/Pokemon';
import { colors } from '../theme';
import { styles } from '../styles';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: Pokemon;
  onPress: () => void;
}

export const PokemonCard = ({pokemon, onPress}: Props) => {



  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor:colors.default,
        }}>
        {/* Nombre del pokemon y ID */}
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>

        <Image
          source={{uri: pokemon.details?.sprites!.front_default}}
          style={styles.pokemonImage}
        />
      </View>
    </TouchableOpacity>
  );
};


import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {SafeAreaView, Text, Image, StyleSheet} from 'react-native';
import {Pokemon} from '../context/pokemon-type';

export type PokemonDetailScreenParams = {
  info: Pokemon;
};

export type PokemonDetailScreenRouteProp = RouteProp<
  Record<string, PokemonDetailScreenParams>
>;

type PropsT = {
  route: PokemonDetailScreenRouteProp;
};

export const PokemonDetailScreen = ({route}: PropsT) => {
  const {info} = route.params;
  const types = Array.from(
    Array.from(info.types).map(type => type.type.name),
  ).join(',');

  const abilities = Array.from(
    Array.from(info.abilities).map(ability => ability.ability.name),
  ).join(',');

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>{info?.id ?? ''}</Text>
        <Text style={styles.name}>{info?.name ?? ''}</Text>
        <Image style={styles.img} source={{uri: info?.sprites.front_default}} />
        <Text>{types}</Text>
        <Text>{abilities}</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    fontSize: 20,
  },
  img: {
    width: 120,
    height: 120,
  },
});

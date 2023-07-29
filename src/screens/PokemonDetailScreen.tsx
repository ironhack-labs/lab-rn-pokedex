import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {SafeAreaView, Text, Image, StyleSheet} from 'react-native';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {CustomPokemonT} from '../context/context';

export type PokemonDetailScreenParams = {
  info: CustomPokemonT;
};

export type PokemonDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'PokemonDetail'
>;

export type PokemonDetailScreenPropT = {
  route: PokemonDetailScreenRouteProp;
};

export const PokemonDetailScreen = ({route}: PokemonDetailScreenPropT) => {
  const {info} = route.params;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>{info?.id ?? ''}</Text>
        <Text style={styles.name}>{info?.name ?? ''}</Text>
        <Image style={styles.img} source={{uri: info.image}} />
        <Text>{info.type}</Text>
        <Text>{info.abilities}</Text>
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

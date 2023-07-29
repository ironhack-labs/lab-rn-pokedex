import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, Image, StyleSheet} from 'react-native';
import {PokemonT} from '../components/PokemonCard';

export type PokemonDetailScreenParams = {
  info: PokemonT;
};

export type PokemonDetailScreenRouteProp = RouteProp<
  Record<string, PokemonDetailScreenParams>
>;

type PropsT = {
  route: PokemonDetailScreenRouteProp;
};

export const PokemonDetailScreen = ({route}: PropsT) => {
  const {info} = route.params;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>{info?.id ?? ''}</Text>
        <Text style={styles.name}>{info?.name ?? ''}</Text>
        {/* <Image source={require('')} />*/}
        <Text>{info?.type ?? ''}</Text>
        <Text>{info?.abilities ?? ''}</Text>
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
});

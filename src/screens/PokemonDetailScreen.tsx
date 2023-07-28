import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, Image, StyleSheet} from 'react-native';
import {PokemonT} from '../components/PokemonCard';

type ScreenParams = {
  information: PokemonT;
};

type ScreenRouteProp = RouteProp<Record<string, ScreenParams>>;

type PropsT = {
  route: ScreenRouteProp;
};

export const PokemonDetailScreen = ({route}: PropsT) => {
  const {information} = route.params;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>{information?.id ?? ''}</Text>
        <Text style={styles.name}>{information?.name ?? ''}</Text>
        {/* <Image source={require('')} />*/}
        <Text>{information?.type ?? ''}</Text>
        <Text>{information?.abilities ?? ''}</Text>
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

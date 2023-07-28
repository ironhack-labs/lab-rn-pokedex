import React from 'react';
import {SafeAreaView, Text, Image, StyleSheet} from 'react-native';

export const PokemonDetailScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>ID</Text>
        <Text style={styles.name}>bulbasaur</Text>
        {/* <Image source={require('')} />*/}
        <Text>Type</Text>
        <Text>Sprite</Text>
        <Text>Abilities</Text>
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

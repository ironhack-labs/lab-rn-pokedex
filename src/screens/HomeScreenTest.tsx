import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import PokemonList from '../components/PokemonList';

const data = require('../../data.json');

function HomeTest(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginHorizontal: 25}}>
        <PokemonList data={data.results} /> 
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeTest;

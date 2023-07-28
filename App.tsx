import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import PokemonList from './src/components/PokemonList';
const data = require('./data.json');

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
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

export default App;

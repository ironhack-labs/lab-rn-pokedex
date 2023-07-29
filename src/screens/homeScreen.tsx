import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import PokeImg from '../../img/PokeImg';
import PokemonList from '../components/pokemonList';
import { usePokemonContext } from '../context/pokemonContext';
import styles from '../styles/Home.Styles';
import { globalStyles } from '../styles/themes';

const HomeScreen = () => {
  const {state} = usePokemonContext();

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar/>
      <View style={styles.pokeball}>
        <PokeImg />
      </View>
      <Text style={styles.text}>Pokédex</Text>
      <PokemonList pokemons={state.pokemonList} />
    </SafeAreaView>
  );
};
export default HomeScreen;

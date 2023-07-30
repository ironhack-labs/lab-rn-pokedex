import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import PokeImg from '../../img/PokeImg';
import PokemonList from '../components/PokemonList';
import {usePokemonContext} from '../context/PokemonContext';
import styles from '../styles/Home.Styles';
import {globalStyles} from '../styles/Themes';

const HomeScreen = () => {
  const {state} = usePokemonContext();

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar />
      <View style={styles.pokeball}>
        <PokeImg />
      </View>
      {state.myPokemons?.length > 0 && (
        <View>
          <Text style={styles.text}>My pokemons</Text>
          <PokemonList pokemons={state.myPokemons} own={true} />
        </View>
      )}
      <Text style={styles.text}>Pokédex</Text>
      <PokemonList pokemons={state.pokemonList} />
    </SafeAreaView>
  );
};
export default HomeScreen;

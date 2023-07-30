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
    <SafeAreaView>
      <StatusBar />
      <View style={styles.pokeball}>
        <PokeImg />
      </View>
      {state.myPokemons?.length > 0 && (
        <View style={globalStyles.container}>
          <Text style={globalStyles.title}>My pokemons</Text>
          <PokemonList pokemons={state.myPokemons} own={true} />
        </View>
      )}
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Pokédex</Text>
        <PokemonList pokemons={state.pokemonList} />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

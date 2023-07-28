// src/screens/PokemonDetailScreen.tsx
import React, {useContext} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {PokemonContext} from '../context/PokemonContext';
import {RouteProp, useRoute} from '@react-navigation/native';

interface PokemonDetailScreenProps {}

const PokemonDetailScreen: React.FC<PokemonDetailScreenProps> = () => {
  const {params} = useRoute<RouteProp<{params: {name: string}}, 'params'>>();
  const {state} = useContext(PokemonContext);
  const {pokemons} = state;
  const pokemon = pokemons.find(poke => poke.name === params.name);
  console.error('PokemonDetailScreen', params);

  return (
    <View style={styles.container}>
      {pokemon && (
        <>
          <View style={styles.card}>
            <View style={styles.avatarContainer}>
              <Image
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${39}.png`,
                }}
                style={styles.avatar}
              />
            </View>
            <Text style={styles.pokemonName}>{pokemon.name}</Text>
          </View>
          {/* Render other details about the Pokémon here */}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 4,
    marginBottom: 16,
    padding: 16,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 16,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  pokemonName: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default PokemonDetailScreen;

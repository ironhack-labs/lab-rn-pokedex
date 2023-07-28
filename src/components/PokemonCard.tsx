// src/components/PokemonCard.tsx
import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Pokemon} from '../context/PokemonContext';

interface PokemonCardProps {
  pokemon: Pokemon;
  onPress: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({pokemon, onPress}) => {
  //console.error('pokemon', pokemon);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${35}.png`,
            }}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.pokemonName}>{pokemon.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 180,
    borderRadius: 20,
    margin: 8,
    backgroundColor: 'white',
    elevation: 4, // Add shadow for Android
    shadowColor: 'rgba(0, 0, 0, 0.2)', // Add shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden', // Hide overflowing content (the rounded corners) of the Image
    marginTop: 16,
    alignSelf: 'center',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  pokemonName: {
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default PokemonCard;

// components/PokemonCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Pokemon } from '../context/types/Pokemon';
import getPokemonId from '../utils/getPokemonId';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const navigation = useNavigation();

  const handlePokemonPress = () => {
    navigation.navigate('PokemonDetail', { pokemon });
  };

  return (
    <TouchableOpacity onPress={handlePokemonPress} style={styles.container}>
      <Image
        source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${getPokemonId(pokemon.url)}.png` }}
        style={styles.image}
      />
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text style={styles.number}>Number: {getPokemonId(pokemon.url)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  number: {
    fontSize: 14,
  },
});

export default PokemonCard;

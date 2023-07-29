// PokemonCard.tsx

import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type Pokemon = {
  name: string;
  id: number;
  image: string;
};

type PokemonCardProps = {
  pokemon: Pokemon;
  onPress: () => void; // Agregamos la prop onPress
};

const PokemonCard: React.FC<PokemonCardProps> = ({pokemon, onPress}) => {
  const navigation = useNavigation();

  const handlePokemonPress = () => {
    onPress(); // Llamamos a la función onPress pasada desde el PokemonList
    // navigation.navigate('PokemonDetail', { pokemonName: pokemon.name });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePokemonPress}>
      <Image source={{uri: pokemon.image}} style={styles.image} />
      <Text>{pokemon.name}</Text>
      <Text>#{pokemon.id}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
});

export default PokemonCard;

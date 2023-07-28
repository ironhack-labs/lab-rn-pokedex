import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/card';

type PokemonCardProps = {
  pokemon: {
    name: string;
    id: number;
    image: string;
  };
};

const PokemonCard: React.FC<PokemonCardProps> = ({pokemon}) => {
  const navigation = useNavigation();

  const handlePokemonPress = () => {
    //navigation.navigate('PokemonDetail', { pokemonName: pokemon.name });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePokemonPress}>
      <Image source={{uri: pokemon.image}} style={styles.image} />
      <Text>#{pokemon.id}</Text>
      <Text>{pokemon.name}</Text>
    </TouchableOpacity>
  );
};

export default PokemonCard;

import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../navigation/Navigationn';
import styles from '../styles/Card.Styless';
import { Pokemon } from '../types/Typess';

export type PokemonCardProps = {
  pokemon: Pokemon;
  own?: boolean;
};

const PokemonCard = ({pokemon, own}: PokemonCardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('PokemonDetail', {
      pokemonName: pokemon.name,
      detail: own ? pokemon : undefined,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image width={20} source={{uri: pokemon.image}} style={styles.image} />
      <Text style={styles.textId}>#00{pokemon.id}</Text>
      <Text style={styles.textName}>{pokemon.name}</Text>
      <Image
        source={require('../../img/Pokeball.png')}
        style={styles.imageBall}
      />
    </TouchableOpacity>
  );
};

export default PokemonCard;

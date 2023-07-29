import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/card';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/navigation';

export type PokemonCardProps = {
  name: string;
  id: number;
  image: string;
};

const PokemonCard = ({name, id, image}: PokemonCardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('PokemonDetail', {pokemonName: name});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress} >
      <Image width={20} source={{uri: image}} style={styles.image} />
      <Text style={styles.textId}>#{id}</Text>
      <Text style={styles.textName}>{name}</Text>
      <Image source={require("../../img/Pokeball.png")} style={styles.imageBall}/>
    </TouchableOpacity>
  );
};

export default PokemonCard;

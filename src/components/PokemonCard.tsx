import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {PokeInfo} from '../interface/PokeTypes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: {id: number} | undefined;
  PokemonDetail: {id: number} | undefined;
  AddPokemon: {id: number} | undefined;
};

const PokemonCard: React.FC<PokeInfo> = ({name, id, description}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const goToPokemon = () => {
    navigation.navigate('PokemonDetail', {id: id});
  };
  return (
    <TouchableOpacity style={style.card} onPress={goToPokemon}>
      <Text>{name}</Text>
      <Image
        source={{uri: description?.sprites.front_default}}
        style={style.image}
      />
    </TouchableOpacity>
  );
};

export default PokemonCard;

const style = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#000',
    height: 300,
  },
  image: {
    flex: 1,
    width: 200,
  },
});

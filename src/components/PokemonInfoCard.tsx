import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {usePokeContextProvider} from '../context/usePokemon';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
type RootStackParamList = {
  Home: {id: number} | undefined;
  PokemonDetail: {id: number} | undefined;
  AddPokemon: {id: number} | undefined;
};

const PokemonInfoCard = () => {
  const {pokeInfo} = usePokeContextProvider();
  const navigation = useNavigation();

  const goToPokemon = () => {
    navigation.navigate<StackNavigationProp<RootStackParamList>>(
      'PokemonDetail',
    );
  };
  return (
    <>
      {pokeInfo.map(pokemon => (
        <TouchableWithoutFeedback onPress={goToPokemon}>
          <Text>{pokemon.name}</Text>
        </TouchableWithoutFeedback>
      ))}
    </>
  );
};

export default PokemonInfoCard;

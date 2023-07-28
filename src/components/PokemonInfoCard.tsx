import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {usePokeContextProvider} from '../context/usePokemon';
import {PokeCardProps} from '../interface/PokeTypes';

const PokemonInfoCard = ({item}: any) => {
  const {pokeInfo, fetchPoke} = usePokeContextProvider();

  const goToPokemon = () => {};
  return (
    <TouchableWithoutFeedback>
      <Text>{item.name}</Text>
    </TouchableWithoutFeedback>
  );
};

export default PokemonInfoCard;

import React from 'react';
import {FlatList, View} from 'react-native';
import PokemonCard from './PokemonCard';
import {Pokemon} from '../../hooks/useFetch';

interface PokemonListProps {
  data: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({data}) => {
  return (
    <View style={{paddingHorizontal: 25, marginTop: 16}}>
      <FlatList
        data={data}
        keyExtractor={pokemon => pokemon.name}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

export default PokemonList;

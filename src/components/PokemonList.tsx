import React from 'react';
import {FlatList, View} from 'react-native';
import PokemonCard from './PokemonCard';
import {Pokemon} from '../hooks/useFetch';
import {NavigationState, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeNavigatorProps} from '../navigation/HomeNavigator';

interface PokemonListProps {
  data: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({data}) => {
  const navigation = useNavigation<StackNavigationProp<HomeNavigatorProps>>();

  return (
    <View style={{paddingHorizontal: 25, marginTop: 16}}>
      <FlatList
        data={data}
        keyExtractor={pokemon => pokemon.name}
        renderItem={({item}) => (
          <PokemonCard
            pokemon={item}
            onPress={() => navigation.navigate('POKEMON_DETAILS', {item})}
          />
        )}
      />
    </View>
  );
};

export default PokemonList;

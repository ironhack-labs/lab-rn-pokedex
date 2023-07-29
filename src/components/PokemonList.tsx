// PokemonList.tsx

import React from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {usePokemonContext} from '../context/PokemonContext';
import PokemonCard from './PokemonCard';
import styles from '../theme/stylesList';

type Pokemon = {
  name: string;
  id: number;
  image: string;
};

type PokemonListProps = {
  pokemons: Pokemon[];
};

const PokemonList: React.FC<PokemonListProps> = ({pokemons}) => {
  const navigation = useNavigation();

  const handlePokemonPress = (pokemonName: string) => {
    navigation.navigate('PokemonDetail', {pokemonName});
  };

  const renderPokemonItem = ({item}: {item: Pokemon}) => (
    <PokemonCard pokemon={item} onPress={() => handlePokemonPress(item.name)} />
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={pokemons}
        renderItem={renderPokemonItem}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default PokemonList;

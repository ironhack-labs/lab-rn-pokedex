import React from 'react';
import {FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {usePokemonContext} from '../context/PokemonContext';
import styles from '../theme/styles';

type PokemonItemProps = {
  name: string;
  id: number;
};

const PokemonItem: React.FC<PokemonItemProps> = ({name, id}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('PokemonDetail', {pokemonName: name});
  };

  return (
    <TouchableOpacity style={styles.pokemonItem} onPress={handlePress}>
      <Text style={styles.pokemonItemText}>{name}</Text>
    </TouchableOpacity>
  );
};

type PokemonListProps = {
  pokemons: PokemonItemProps[];
};

const PokemonList: React.FC<PokemonListProps> = ({pokemons}) => {
  return (
    <FlatList
      data={pokemons}
      renderItem={({item}) => <PokemonItem name={item.name} id={item.id} />}
      keyExtractor={item => String(item.id)}
      style={styles.listContainer}
    />
  );
};

export default PokemonList;

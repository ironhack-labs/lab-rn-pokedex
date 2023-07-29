import React from 'react';
import { FlatList } from 'react-native';
import styles from '../styles/Home.Styles';
import PokemonCard, { PokemonCardProps } from './pokemonCard';

type PokemonListProps = {
  pokemons: PokemonCardProps[];
};

const PokemonList: React.FC<PokemonListProps> = ({pokemons}) => {
  
  return (
    <FlatList
      data={pokemons}
      renderItem={({item}) => <PokemonCard name={item.name} id={item.id} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}/>}
      keyExtractor={item => String(item.id)}
      style={styles.listContainer}
    />
  );
};

export default PokemonList;
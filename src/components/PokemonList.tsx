import {FlatList, StyleSheet} from 'react-native';
import {PokemonCard} from './PokemonCard';
import {DataT, Pokemon, usePokedex} from '../context/context';

export const PokemonList = () => {
  const {pokemons} = usePokedex();

  const renderItem = ({item}: {item: DataT | Pokemon}) => (
    <PokemonCard pokemon={item} />
  );

  return (
    <FlatList
      data={pokemons}
      renderItem={renderItem}
      keyExtractor={(item, index) => `item-${item.name}-${index}`}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    gap: 10,
    padding: 20,
  },
});

import {SectionList, StyleSheet, Text, View} from 'react-native';
import {PokemonCard} from './PokemonCard';
import {CustomPokemonT, DataT, usePokedex} from '../context/context';
import {CustomPokemonCard} from './CustomPokemonCard';

export const PokemonList = () => {
  const {pokemons, customPokemons} = usePokedex();

  const renderItem = ({item}: {item: CustomPokemonT | DataT}) => (
    <View style={styles.item}>
      {'url' in item ? (
        <PokemonCard pokemon={item} />
      ) : (
        <CustomPokemonCard pokemon={item} />
      )}
    </View>
  );

  const data: {title: string; data: Array<DataT | CustomPokemonT>}[] = [
    {
      title: 'Pokemon API',
      data: pokemons,
    },
  ];

  if (customPokemons.length)
    data.unshift({
      title: 'Custom Pokemons',
      data: customPokemons,
    });

  return (
    <SectionList
      sections={data}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
      keyExtractor={(item, index) => `${item.name}-${index}`}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.title}>{title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
  item: {
    marginVertical: 8,
  },
});

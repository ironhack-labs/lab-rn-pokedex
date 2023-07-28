import {FlatList, StyleSheet} from 'react-native';
import {DataT} from '../screens/HomeScreen';
import {PokemonCard} from './PokemonCard';

type PropsT = {
  data: DataT[];
};

export const PokemonList = (props: PropsT) => {
  const renderItem = ({item}: {item: DataT}) => <PokemonCard pokemon={item} />;

  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
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

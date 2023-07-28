import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

type PokemonT = {
  name: string;
  url: string;
};

const pokemonsList: PokemonT[] = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
  {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
  },
  {
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
  },
  {
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
  },
];

const renderItem = ({item}: {item: PokemonT}): JSX.Element => (
  <View>
    <Text>{item.name}</Text>
  </View>
);

export const HomeScreen = () => {
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={pokemonsList}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    gap: 10,
    padding: 20,
  },
});

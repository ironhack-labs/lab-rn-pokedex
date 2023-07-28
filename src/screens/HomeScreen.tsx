// src/screens/HomeScreen.tsx
import React, {useContext} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {PokemonContext} from '../context/PokemonContext';
import PokemonCard from '../components/PokemonCard';

const HomeScreen: React.FC = ({navigation}) => {
  const {state} = useContext(PokemonContext);
  const {pokemons} = state;

  const handlePokemonPress = (name: string) => {
    navigation.navigate('PokemonDetail', {name});
  };

  const handleAddPokemon = () => {
    navigation.navigate('AddPokemon');
  };

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.addButton} onPress={handleAddPokemon}>
        <Text style={styles.addButtonLabel}>Add Pokémon</Text>
      </TouchableOpacity>
      <FlatList
        data={pokemons}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <PokemonCard
            pokemon={item}
            onPress={() => handlePokemonPress(item.name)}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 16,
  },
  addButtonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;

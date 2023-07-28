// src/screens/PokemonSearchScreen.tsx
import React, {useState, useContext} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
import {PokemonContext} from '../context/PokemonContext';
import PokemonCard from '../components/PokemonCard';
import {useNavigation} from '@react-navigation/native';

const PokemonSearchScreen: React.FC = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const {state} = useContext(PokemonContext);
  const {pokemons} = state;

  const filteredPokemons = pokemons.filter(pokemon => {
    const pokemonName = pokemon.name.toLowerCase();
    return pokemonName.includes(searchQuery.toLowerCase());
  });

  const handlePokemonPress = (name: string) => {
    navigation.navigate('PokemonDetail', {name});
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <View>
      <Text style={{color: '#000000'}}>Search Pokémon by name:</Text>
      <TextInput
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder="Enter Pokémon name"
        placeholderTextColor={'#000000'}
      />
      <FlatList
        data={filteredPokemons}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <PokemonCard
            pokemon={item}
            onPress={() => handlePokemonPress(item.name)}
          />
        )}
      />
    </View>
  );
};

export default PokemonSearchScreen;

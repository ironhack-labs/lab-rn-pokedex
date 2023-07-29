import {View, TextInput, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {pokemonSearchStyles} from '../theme/PokemonSearch.styles';
import {useDebounce} from 'usehooks-ts';
import {Pokemon} from '../types';
import PokemonList from '../components/PokemonList';
import {usePokemonContext} from '../context/PokemonContext';

const PokemonSearchScreen = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce<string>(value, 500);
  const [pokemonFiltered, setPokemonFiltered] = useState<Pokemon[]>([]);
  const {state} = usePokemonContext();

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (debouncedValue === '') {
      setPokemonFiltered([]);
    } else {
      setPokemonFiltered(
        state.pokemonList.filter(x =>
          x.name.toUpperCase().includes(debouncedValue.toUpperCase()),
        ),
      );
    }
  }, [debouncedValue, state]);

  return (
    <View style={pokemonSearchStyles.container}>
      <TextInput
        style={pokemonSearchStyles.searchInput}
        placeholder="Search pokemon by name"
        onChangeText={handleChange}
      />
      <Text style={pokemonSearchStyles.title}>{debouncedValue}</Text>
      <PokemonList
        pokemons={pokemonFiltered.map(x => ({
          id: x.id,
          name: x.name,
          image: x.image,
        }))}
      />
    </View>
  );
};

export default PokemonSearchScreen;

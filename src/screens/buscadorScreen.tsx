import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { View, TextInput, Text } from 'react-native';
import { useDebounce } from 'usehooks-ts';
import { Pokemon } from '../types/types';
import PokemonList from '../components/pokemonList';
import { usePokemonContext } from '../context/pokemonContext';
import { buscar } from '../styles/buscar';

const buscadorScreen = () => {
  const { state } = usePokemonContext();
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  const pokemonFiltered = useMemo(() => {
    if (!debouncedValue) {
      return [];
    }
    const searchTerm = debouncedValue.toUpperCase();
    return (
      state.pokemonList?.filter((x) =>
        x.name.toUpperCase().includes(searchTerm)
      ) ?? []
    );
  }, [debouncedValue, state.pokemonList]);

  return (
    <View style={buscar.container}>
      <TextInput
        style={buscar.searchInput}
        placeholder="Buscar por nombre"
        onChangeText={handleChange}
      />
      <Text style={buscar.title}>{debouncedValue}</Text>
      <PokemonList
        pokemons={pokemonFiltered.map((x) => ({
          id: x.id,
          name: x.name,
          image: x.image,
        }))}
      />
    </View>
  );
};

export default buscadorScreen;

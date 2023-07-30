import React, { useCallback, useMemo, useState } from 'react';
import { SafeAreaView, Text, TextInput } from 'react-native';
import { useDebounce } from 'usehooks-ts';
import PokemonList from '../components/PokemonList';
import { usePokemonContext } from '../context/PokemonContext';
import buscar from '../styles/Search.Styles';
import { globalStyles } from '../styles/Themes';

const SearchPokemonScreen = () => {
  const {state} = usePokemonContext();
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
      state.pokemonList?.filter(x =>
        x.name.toUpperCase().includes(searchTerm),
      ) ?? []
    );
  }, [debouncedValue, state.pokemonList]);

  return (
    <SafeAreaView style={globalStyles.container}>
      <TextInput
        style={buscar.searchInput}
        placeholder="Buscar por nombre"
        onChangeText={handleChange}
      />
      <Text style={buscar.title}>{debouncedValue}</Text>
      <PokemonList
        pokemons={pokemonFiltered.map(x => ({
          id: x.id,
          name: x.name,
          image: x.image,
        }))}
      />
    </SafeAreaView>
  );
};

export default SearchPokemonScreen;

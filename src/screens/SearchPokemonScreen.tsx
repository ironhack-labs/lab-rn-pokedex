import React, {useCallback, useMemo, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDebounce} from 'usehooks-ts';
import PokemonList from '../components/PokemonList';
import {usePokemonContext} from '../context/PokemonContext';
import styles from '../styles/Search.Styles';
import {globalStyles} from '../styles/Themes';

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
    <SafeAreaView>
      <StatusBar />
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Buscar</Text>
        <Text style={globalStyles.text}>Busca por nombre</Text>
        <View style={styles.searchSection}>
          <Image
          style={styles.searchIcon}
            source={require('../../img/search.png')}
            width={20}
            alt="icon-search"
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Nombre"
            onChangeText={handleChange}
            underlineColorAndroid="transparent"
          />
        </View>
        <Text style={globalStyles.subtitle}>{debouncedValue}</Text>
        <PokemonList
          pokemons={pokemonFiltered.map(x => ({
            id: x.id,
            name: x.name,
            image: x.image,
            type: x.type,
            abilities: x.abilities,
          }))}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchPokemonScreen;

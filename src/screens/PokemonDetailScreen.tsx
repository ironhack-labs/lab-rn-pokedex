import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import useFetch from '../hooks/useFetch';
import {usePokemonContext} from '../context/PokemonContext';
import styles from '../styles';

type RootStackParamList = {
  PokemonDetail: {pokemonName: string};
};

type PokemonDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'PokemonDetail'
>;

type PokemonDetail = {
  name: string;
  id: number;
  image: string;
  type: string;
  abilities: string[];
};

const PokemonDetailScreen: React.FC = () => {
  const route = useRoute<PokemonDetailScreenRouteProp>();
  const {pokemonName} = route.params;
  const {state, dispatch} = usePokemonContext();
  const {data, loading} = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  );

  const selectedPokemon: PokemonDetail | undefined = state.pokemonList.find(
    pokemon => pokemon.name === pokemonName,
  );

  useEffect(() => {
    if (data) {
      const pokemonDetail: PokemonDetail = {
        name: data.name,
        id: data.id,
        image: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
        type: data.types[0]?.type.name || '',
        abilities: data.abilities.map((ability: any) => ability.ability.name),
      };

      dispatch({type: 'SET_SELECTED_POKEMON', payload: pokemonDetail});
    }
  }, [data]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {selectedPokemon ? (
        <>
          <Image source={{uri: selectedPokemon.image}} style={styles.image} />
          <Text style={styles.text}>Name: {selectedPokemon.name}</Text>
          <Text style={styles.text}>Number: #{selectedPokemon.id}</Text>
          <Text style={styles.text}>Type: {selectedPokemon.type}</Text>
          <Text style={styles.text}>Abilities:</Text>
          {selectedPokemon.abilities.map(ability => (
            <Text key={ability} style={styles.text}>
              {ability}
            </Text>
          ))}
        </>
      ) : (
        <Text>Pokémon not found.</Text>
      )}
    </View>
  );
};

export default PokemonDetailScreen;

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
type DetailsList = {
  PokemonDetail: {pokemonName: string};
};
import {usePokemonContext} from '../context/pokemonContext';
import useFetch from '../hooks/useFetch';
import styles from '../styles/styles';
type PokemonDetailScreenRouteProp = RouteProp<DetailsList, 'PokemonDetail'>;
type PokemonDetail = {
  name: string;
  id: number;
  image: string;
  type: string;
  abilities: string[];
};
const pokemonDetailsScreen: React.FC = () => {
  const route = useRoute<PokemonDetailScreenRouteProp>();
  const {pokemonName} = route.params;
  const {state, dispatch} = usePokemonContext();
  const {loading, data} = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  );
  useEffect(() => {
    if (data) {
      const pokemonDetail = {
        name: data.name,
        id: data.id,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
        type: data.types.length > 0 ? data.types[0].type.name : '',
        abilities: data.abilities.map((ability: any) => {
          return ability.ability.name;
        }),
      };
      dispatch({type: 'SET_SELECTED_POKEMON', payload: pokemonDetail});
    }
  }, [data]);
  return (
    <View>
      {state.selectedPokemon ? (
        <>
          <Image source={{uri: state.selectedPokemon.image}} style={styles.image}    />
          <Text style={styles.text}>Nombre: {state.selectedPokemon.name}</Text>
          <Text style={styles.text}>Numero: #{state.selectedPokemon.id}</Text>
          <Text style={styles.text}>Tipo: {state.selectedPokemon.type}</Text>
          <Text style={styles.text}>Habilidades:</Text>
          {state.selectedPokemon.abilities.length > 0 ? (
            state.selectedPokemon.abilities.map(ability => (
              <Text key={ability} style={styles.text}>
                {ability}
              </Text>
            ))
          ) : (
            <Text style={styles.text}>No contamos con esa información</Text>
          )}
        </>
      ) : (
        <Text>{`No se encuentran detalles del Pokemon ${pokemonName}`}</Text>
      )}
    </View>
  );
};
export default pokemonDetailsScreen;










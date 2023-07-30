import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, SafeAreaView, Text} from 'react-native';
import {usePokemonContext} from '../context/PokemonContext';
import useFetch from '../hooks/UseFetch';
import styles from '../styles/Home.Styles';
import {RootStackParamList} from '../navigation/navigation';

type PokemonDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'PokemonDetail'
>;

const PokemonDetailsScreen: React.FC = () => {
  const route = useRoute<PokemonDetailScreenRouteProp>();
  const {pokemonName, detail} = route.params;
  const {state, selectPokemon} = usePokemonContext();
  const {data} = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
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
      selectPokemon(pokemonDetail);
    }
    if(detail){
      selectPokemon(detail);
    }
  }, [data]);
  return (
    <SafeAreaView>
      {state.selectedPokemon ? (
        <>
          <Image source={{uri: state.selectedPokemon.image}} />
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
    </SafeAreaView>
  );
};
export default PokemonDetailsScreen;

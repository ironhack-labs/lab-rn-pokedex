import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {usePokemonContext} from '../context/PokemonContext';
import useFetch from '../hooks/UseFetch';
import {RootStackParamList} from '../navigation/navigation';
import styles from '../styles/Detail.Styles';
import {globalStyles, theme} from '../styles/Themes';

type PokemonDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'PokemonDetail'
>;

const PokemonDetailsScreen = () => {
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
    if (detail) {
      selectPokemon(detail);
    }
  }, [data]);
  return (
    <SafeAreaView style={{backgroundColor: theme.colors.primary}}>
      <StatusBar backgroundColor={theme.colors.primary} />
      {state.selectedPokemon ? (
        <View style={globalStyles.container}>
          <View style={styles.information}>
            <Image
              style={styles.image}
              source={{uri: state.selectedPokemon.image}}
            />
            <>
              <Text style={styles.textId}>#00{state.selectedPokemon.id}</Text>
              <Text style={styles.textName}>{state.selectedPokemon.name}</Text>
            </>
          </View>
          <View style={styles.description}>
            <Text style={styles.subtitle}>Tipo:</Text>
            <Text style={globalStyles.text}>{state.selectedPokemon.type}</Text>
            <Text style={styles.subtitle}>Habilidades:</Text>
            {state.selectedPokemon.abilities.length > 0 ? (
              state.selectedPokemon.abilities.map(ability => (
                <Text key={ability} style={globalStyles.text}>
                  {ability}
                </Text>
              ))
            ) : (
              <Text style={globalStyles.text}>
                No contamos con esa información
              </Text>
            )}
          </View>
        </View>
      ) : (
        <View style={globalStyles.container}>
          <Text>{`No se encuentran detalles del Pokemon ${pokemonName}`}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
export default PokemonDetailsScreen;

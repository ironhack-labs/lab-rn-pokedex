// src/screens/PokemonDetailScreen.tsx
import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {PokemonContext} from '../context/PokemonContext';
import {RouteProp, useRoute} from '@react-navigation/native';

import {fakeDetail} from './mock-detail-data';
import {SafeAreaView} from 'react-native-safe-area-context';
import useFetch from '../hooks/useFetch';

interface PokemonDetailScreenProps {}

const IMAGE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
const DEF_IMG_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png';

const PokemonDetailScreen: React.FC<PokemonDetailScreenProps> = () => {
  const {params} = useRoute<RouteProp<{params: {name: string}}, 'params'>>();
  const {state, dispatch} = useContext(PokemonContext);
  const {pokemons} = state;
  const pokemon = pokemons.find(poke => poke.name === params.name);

  // Fetch the details of the selected Pokémon
  const {data, isLoading} = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon?.name}`,
  );

  useEffect(() => {
    if (data && !isLoading) {
      // Update the Pokémon data in the context state with the fetched details
      const updatedPokemon: Pokemon = {
        ...pokemon!,
        id: data.id,
        image: data.sprites.front_default,
        type: data.types[0].type.name,
        abilities: data.abilities
          .map((ability: any) => ability.ability.name)
          .join(', '),
      };
      dispatch({type: 'UPDATE_POKEMON', payload: updatedPokemon});
    }
  }, [isLoading]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: DEF_IMG_URL || `${IMAGE_URL}${data?.id}.png`,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.content}>
        <View>
          <Text style={styles.name}>#{data?.id + ' ' + data?.name}</Text>
          <View style={styles.dataContainer}>
            <Text style={styles.dataText}>Hight: {data?.height}</Text>
            <View style={{width: 10}}></View>
            <Text style={styles.dataText}>Weight: {data?.weight}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.titleText}>Types:</Text>
          <View style={styles.typesContainer}>
            {data?.types.map(item => (
              <View style={[styles.typePill, styles.pill]} key={item.slot}>
                <Text style={styles.pillText}>{item.type.name}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.titleText}>Abilities:</Text>
          <View style={styles.typesContainer}>
            {data?.abilities.map(item => (
              <View style={[styles.abilityPill, styles.pill]} key={item.slot}>
                <Text style={styles.pillText}>{item.ability.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'aliceblue',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 230,
    height: 230,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  dataContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dataText: {
    color: '#666',
  },
  name: {
    fontSize: 26,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#666',
  },

  typesContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  pill: {
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 10,
  },

  typePill: {
    backgroundColor: 'dodgerblue',
  },

  abilityPill: {
    backgroundColor: 'skyblue',
  },

  pillText: {
    color: 'white',
  },

  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 5,
  },
});

export default PokemonDetailScreen;
function dispatch(arg0: {type: string; payload: Pokemon}) {
  throw new Error('Function not implemented.');
}

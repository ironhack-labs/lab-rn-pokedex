import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import useFetch from '../hooks/useFetch';
import { usePokemonContext } from '../context/PokemonContext';
import styles from '../theme/styles';
import { pokemonDetailStyles } from '../theme/pokemondetail.styles';
import theme from '../theme/theme';

type RootStackParamList = {
  PokemonDetail: { pokemonName: string };
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
  const { pokemonName } = route.params;
  const { state, dispatch } = usePokemonContext();
  const { data, loading } = useFetch(
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

      dispatch({ type: 'SET_SELECTED_POKEMON', payload: pokemonDetail });
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
    <View style={pokemonDetailStyles.container}>
      {data ? (
        <View style={{ flex: 1 }}>
          {/* <Image source={{ uri: data.image }} style={styles.image} /> */}
          <View style={{ flex: .7, flexDirection: "row", backgroundColor: theme.typeBackground[data.types[0].type.name], alignItems: 'center' }}>
            <Image source={{ uri: data.sprites.other.dream_world.front_default }} style={{height:200, width:200}} resizeMode='contain' />
            <View style={{ flex: 1 }}>
              <Text style={pokemonDetailStyles.textNumber}>#{data.id}</Text>
              <Text style={pokemonDetailStyles.textName} >{data.name}</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  {
                    data.types.map((type) => {
                      return (
                        <View style={[pokemonDetailStyles.typeContainer, { backgroundColor: theme.typeColors[type.type.name] }]}>

                          <Text style={pokemonDetailStyles.typetext}>{type.type.name}</Text>
                        </View>
                      )
                    })
                  }

                </View>
              </View>
            </View>
          </View>
          <View style={pokemonDetailStyles.detailContainer}>

            <Image source={{ uri: data.types[0].type.url }} style={{ height: 10, width: 20 }} />
            <Text style={styles.text}>Weight <Text style={{fontWeight:'bold'}}>{data.weight} Kg</Text></Text>
            <Text style={styles.text}>Abilities</Text>
            <View style={{ flexDirection: 'row' }}>
              {data.abilities.map(ability => (
                <View style={[pokemonDetailStyles.typeContainer, { backgroundColor: theme.typeColors[data.types[0].type.name] }]}>
                  <Text key={ability.ability.name} style={pokemonDetailStyles.typetext}>
                    {ability.ability.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      ) : (
        <Text>Pokémon not found.</Text>
      )
      }
    </View >
  );
};

export default PokemonDetailScreen;

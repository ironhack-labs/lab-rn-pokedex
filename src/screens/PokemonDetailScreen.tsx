// src/screens/PokemonDetailScreen.tsx
import React, {useContext} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {PokemonContext} from '../context/PokemonContext';
import {RouteProp, useRoute} from '@react-navigation/native';

import {fakeDetail} from './mock-detail-data';
import {SafeAreaView} from 'react-native-safe-area-context';

interface PokemonDetailScreenProps {}

const IMAGE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const PokemonDetailScreen: React.FC<PokemonDetailScreenProps> = () => {
  const {params} = useRoute<RouteProp<{params: {name: string}}, 'params'>>();
  const {state} = useContext(PokemonContext);
  const {pokemons} = state;
  const pokemon = pokemons.find(poke => poke.name === params.name);
  console.error('PokemonDetailScreen', params);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: `${IMAGE_URL}${fakeDetail.id}.png`,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.content}>
        <View>
          <Text style={styles.name}>
            #{fakeDetail.id + ' ' + fakeDetail.name}
          </Text>

          <View style={styles.dataContainer}>
            <Text style={styles.dataText}>Hight: {fakeDetail.height}</Text>
            <View style={{width: 10}}></View>
            <Text style={styles.dataText}>Weight: {fakeDetail.weight}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.titleText}>Types:</Text>
          <View style={styles.typesContainer}>
            {fakeDetail.types.map(item => (
              <View style={[styles.typePill, styles.pill]} key={item.slot}>
                <Text style={styles.pillText}>{item.type.name}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.titleText}>Abilities:</Text>
          <View style={styles.typesContainer}>
            {fakeDetail.abilities.map(item => (
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

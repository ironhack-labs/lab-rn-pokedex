// src/components/PokemonCard.tsx
import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Pokemon} from '../context/PokemonContext';

interface PokemonCardProps {
  pokemon: Pokemon;
  onPress: () => void;
}

const IMAGE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
const DEF_IMG_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png';

function getIdFromURl(url: string) {
  const splitUrl = url.split('/');
  return splitUrl[splitUrl.length - 2];
}

const PokemonCard: React.FC<PokemonCardProps> = ({pokemon, onPress}) => {
  const id = getIdFromURl(pokemon.url);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.card}>
        <View style={styles.infoContainer}>
          <Text style={styles.pokemonNumber}>#{id}</Text>
          <Text style={styles.pokemonName}>{pokemon.name}</Text>
        </View>

        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: `${IMAGE_URL}${id}.png` || DEF_IMG_URL,
            }}
            style={styles.avatar}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    flex: 1,
    height: 140,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoContainer: {
    padding: 20,
    flex: 1,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
  },
  pokemonNumber: {
    fontSize: 18,
    color: '#666',
    fontWeight: '600',
    marginBottom: 10,
  },
  pokemonName: {
    fontSize: 26,
    fontWeight: '600',
    textTransform: 'capitalize',
    color: '#666',
  },
});

export default PokemonCard;

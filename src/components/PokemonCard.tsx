import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

//Types
import { PokemonCardProps, PokemonFetch, Type } from '../types/Types';

const PokemonCard = ({ pokemon, onPress }: PokemonCardProps) => {
  const [pokemonData, setPokemonData] = useState<PokemonFetch>();

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const fetchPokemonData = async () => {
    try {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  if (!pokemonData) {
    return null;
  }

  const pokemonId = pokemon.url.split('/').slice(-2, -1)[0];
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={{width: '45%'}}>
            <Image source={{ uri: pokemonImage }} style={styles.image}  resizeMode='cover'/>
        </View>
      <View style={styles.details}>
        <Text>#{pokemonId}</Text>
        <Text style={styles.name}>{pokemon.name}</Text>
        <View style={styles.typesContainer}>
          {pokemonData.types.map((type: Type, index: number) => (
            <Text key={index} style={styles.type}>
              {type.type.name}
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#e5e5e5',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 80,
    borderRadius: 40,
  },
  details: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  typesContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  type: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginRight: 5,
    backgroundColor: '#c0c0c0',
    color: 'white',
  },
});

export default PokemonCard;

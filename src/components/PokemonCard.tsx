import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import theme, {getTypeBackgroundColor, getTypeColor} from '../../theme';

//Types
import {PokemonCardProps, PokemonFetch, Type} from '../types/Types';

const PokemonCard = ({pokemon, onPress}: PokemonCardProps) => {
  const backgroundColorPokemon = getTypeBackgroundColor(pokemon.type);
  const backgroundTypeColor = getTypeColor(pokemon.type);

  return (
    <TouchableOpacity
      style={[styles.containerCard, {backgroundColor: backgroundColorPokemon}]}
      onPress={onPress}>
      <View style={{width: '45%'}}>
        <Image
          source={{uri: pokemon.image}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.pokemonId}>#{pokemon.id}</Text>
        <Text style={styles.name}>{pokemon.name}</Text>
        <View style={styles.typesContainer}>
          <View
            style={{
              borderRadius: 100,
              backgroundColor: backgroundTypeColor,
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <Text style={styles.type}>{pokemon.type}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
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
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: theme.colors.whitecolor,
  },
  typesContainer: {
    flexDirection: 'row',
    marginTop: 5,
    gap: 5,
  },
  type: {
    paddingLeft: 10,
    paddingRight: 4,
    paddingVertical: 3,
    borderRadius: 6,
    marginRight: 5,
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  pokemonId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.secondary,
  },
});

export default PokemonCard;

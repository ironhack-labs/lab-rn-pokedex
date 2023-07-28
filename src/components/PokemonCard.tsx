import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import theme, {getTypeBackgroundColor, getTypeColor} from '../../theme';

//Types
import {PokemonCardProps, PokemonFetch, Type} from '../types/Types';

const PokemonCard = ({pokemon, onPress}: PokemonCardProps) => {
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
  const backgroundColorPokemon = getTypeBackgroundColor(
    pokemonData.types[0].type.name,
  );
  const backgroundTypeColor = getTypeColor(pokemonData.types[0].type.name);

  return (
    <TouchableOpacity
      style={[styles.containerCard, {backgroundColor: backgroundColorPokemon}]}
      onPress={onPress}>
      <View style={{width: '45%'}}>
        <Image
          source={{uri: pokemonImage}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.pokemonId}>#{pokemonId}</Text>
        <Text style={styles.name}>{pokemon.name}</Text>
        <View style={styles.typesContainer}>
          {pokemonData.types.map((type: Type, index: number) => {
            const backgroundTypeColor = getTypeColor(type.type.name);
            return (
              <View style={{borderRadius: 100, backgroundColor: backgroundTypeColor, alignItems: 'center', alignContent: 'center'}}>
                <Text
                  key={index}
                  style={styles.type}>
                  {type.type.name}
                </Text>
              </View>
            );
          })}
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

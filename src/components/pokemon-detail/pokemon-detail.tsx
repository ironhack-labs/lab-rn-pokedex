import {View, Text, Image} from 'react-native';
import React from 'react';

import type {Pokemon} from '../../models';
import {pokemonDetailsStyles} from './pokemon-detail.styles';
import {ScrollView} from 'react-native-gesture-handler';

type PokemonDetailProps = {pokemon: Pokemon};

export const PokemonDetail = ({pokemon}: PokemonDetailProps) => {
  const spriteVersions = pokemon.detail!.sprites!.versions;

  const sprites = [
    spriteVersions?.['generation-i']['red-blue'].front_default,
    spriteVersions?.['generation-i'].yellow.front_default,
    spriteVersions?.['generation-ii'].crystal.front_default,
    spriteVersions?.['generation-ii'].gold.front_default,
    spriteVersions?.['generation-ii'].silver.front_default,
    spriteVersions?.['generation-iii'].emerald.front_default,
    spriteVersions?.['generation-iii']['firered-leafgreen'].front_default,
    spriteVersions?.['generation-iii']['ruby-sapphire'].front_default,
    spriteVersions?.['generation-iv']['diamond-pearl'].front_default,
    spriteVersions?.['generation-iv']['heartgold-soulsilver'].front_default,
    spriteVersions?.['generation-iv'].platinum.front_default,
    spriteVersions?.['generation-v']['black-white'].front_default,
    spriteVersions?.['generation-vii']['ultra-sun-ultra-moon'].front_default,
    spriteVersions?.['generation-vii'].icons.front_default,
  ];

  return (
    <View>
      <View style={pokemonDetailsStyles.home}>
        <View style={pokemonDetailsStyles.figure}>
          <View style={pokemonDetailsStyles.figureBg} />
          <Image
            source={require('../../../assets/pokeball.png')}
            style={pokemonDetailsStyles.pokeball}
          />
          <Image
            source={{uri: pokemon.thumbnail}}
            style={pokemonDetailsStyles.pokemonImage}
          />
        </View>
        <Text style={pokemonDetailsStyles.pokemonTitle}>{pokemon.name}</Text>
        <Text style={pokemonDetailsStyles.pokemonTitle}>#{pokemon.id}</Text>
      </View>

      <View style={pokemonDetailsStyles.row}>
        <Text style={pokemonDetailsStyles.rowTitle}>Type</Text>
        <Text style={pokemonDetailsStyles.rowValue}>
          {pokemon.detail!.types?.map(({type}) => type.name).join(' , ')}
        </Text>
      </View>

      <View style={pokemonDetailsStyles.row}>
        <Text style={pokemonDetailsStyles.rowTitle}>Height</Text>
        <Text style={pokemonDetailsStyles.rowValue}>
          {pokemon.detail!.height! / 10} mt
        </Text>
      </View>

      <View style={pokemonDetailsStyles.row}>
        <Text style={pokemonDetailsStyles.rowTitle}>Sprites</Text>
        <ScrollView
          horizontal
          contentContainerStyle={pokemonDetailsStyles.spriteContainer}>
          {sprites.map(sprite => (
            <Image
              source={{
                uri: sprite,
              }}
              style={pokemonDetailsStyles.sprite}
            />
          ))}
        </ScrollView>
      </View>

      <View style={pokemonDetailsStyles.row}>
        <Text style={pokemonDetailsStyles.rowTitle}>Abilities</Text>
        <Text style={pokemonDetailsStyles.rowValue}>
          {pokemon
            .detail!.abilities?.map(({ability}) => ability.name)
            .join(' , ')}
        </Text>
      </View>
    </View>
  );
};

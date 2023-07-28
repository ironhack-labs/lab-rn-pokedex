import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Pokemon, PokemonDetails} from '../interfaces/pokemon';
import { styles } from '../styles';

export const PokemonDetail = ({details}: {details: PokemonDetails}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      <View
        style={{
          ...styles.container,
        }}>
          <View
          style={{
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <Image
            source={{uri: details.sprites!.front_default}}
            style={styles.basicSprite}
          />
        </View>
        <Text style={styles.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {details.types!.map(({type}) => (
            <Text
              style={{
                ...styles.regularText,
                marginRight: 10,
              }}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>

        <Text style={styles.title}>Peso</Text>
        <Text style={styles.regularText}>{details.weight}kg</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <Image
          source={{uri: details.sprites!.front_default}}
          style={styles.basicSprite}
        />

        <Image
          source={{uri: details.sprites!.back_default}}
          style={styles.basicSprite}
        />

        <Image
          source={{uri: details.sprites!.front_shiny}}
          style={styles.basicSprite}
        />

        <Image
          source={{uri: details.sprites!.back_shiny}}
          style={styles.basicSprite}
        />
      </ScrollView>

      <View style={styles.container}>
        <Text style={styles.title}>Habilidades base</Text>
        <View style={{flexDirection: 'row'}}>
          {details.abilities.map(({ability}) => (
            <Text
              style={{
                ...styles.regularText,
                marginRight: 10,
              }}
              key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Movimientos</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {details.moves!.map(({move}) => (
            <Text
              style={{
                ...styles.regularText,
                marginRight: 10,
              }}
              key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {details.stats!.map((stat, i) => (
            <View key={stat.stat.name + i} style={{flexDirection: 'row'}}>
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                  width: 150,
                }}
                key={stat.stat.name}>
                {stat.stat.name}
              </Text>

              <Text
                style={{
                  ...styles.regularText,
                  fontWeight: 'bold',
                }}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>

        
      </View>
    </ScrollView>
  );
};


import React, {FC} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

import type {HomeScreenProps} from '../navigation/app-navigator.types';
import {usePokemonCtx} from '../context';
import {PokemonList} from '../components';

export const HomeScreen: FC<HomeScreenProps> = () => {
  const {pokemons, customPokemons} = usePokemonCtx();

  const sectionsData = [
    {title: 'My Pokemons', data: [{id: 'my-pokemons', data: customPokemons}]},
    {title: 'Pokedex', data: [{id: 'pokedex', data: pokemons}]},
  ];

  if (!customPokemons.length) {
    sectionsData.shift();
  }

  return (
    <SectionList
      stickyHeaderHiddenOnScroll
      sections={sectionsData}
      keyExtractor={item => item.id}
      renderItem={({item}) => <PokemonList pokemons={item.data} />}
      renderSectionHeader={({section: {title}}) => (
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>{title}</Text>
        </View>
      )}
    />
  );
};

export const styles = StyleSheet.create({
  sectionTitle: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionTitleText: {
    fontSize: 20,
    fontWeight: '700',
  },
});

import React, {FC} from 'react';
import type {HomeScreenProps} from '../navigation/app-navigator.types';
import {usePokemonCtx} from '../context';
import {PokemonList} from '../components';

export const HomeScreen: FC<HomeScreenProps> = () => {
  const {pokemons} = usePokemonCtx();

  return <PokemonList pokemons={pokemons} />;
};

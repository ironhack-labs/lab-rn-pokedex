import React, {FC} from 'react';
import type {AddPokemonScreenProps} from '../navigation/app-navigator.types';
import {AddPokemonForm} from '../components';

export const AddPokemonScreen: FC<AddPokemonScreenProps> = () => {
  return <AddPokemonForm />;
};

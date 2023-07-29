import React from 'react';
import {type AddPokemonScreenProps} from '../navigation/app-navigator.types';
import {AddPokemonForm} from '../components';

export const AddPokemonScreen = ({navigation}: AddPokemonScreenProps) => (
  <AddPokemonForm onAddPokemonSuccess={() => navigation.navigate('HomeTab')} />
);

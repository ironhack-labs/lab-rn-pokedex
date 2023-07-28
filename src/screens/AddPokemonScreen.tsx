import {Text, ScrollView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import styles from '../../styles';
import PokeTextInput from '../components/PokeTextInput';
import {usePokemons} from '../hooks/usePokemons';

type FormData = {
  name: string;
  number: string;
  image: string;
  type: string;
  abilities: string;
};

export default function AddPokemonScreen() {
  const {addPokemons} = usePokemons();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
  };

  return (
    <ScrollView style={[styles.container, {padding: 16}]}>
      <Controller
        control={control}
        name="name"
        rules={{required: 'Pokemon name is required'}}
        render={({field: {onChange, onBlur, value}}) => (
          <PokeTextInput
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="example: Pikachu"
            label="Pokemon name"
            errorMessage={errors.name?.message}
          />
        )}
      />
      <View style={{marginTop: 4}} />
      <Controller
        control={control}
        name="type"
        rules={{required: 'Pokemon type is required'}}
        render={({field: {onChange, onBlur, value}}) => (
          <PokeTextInput
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="water, fire, grass, etc..."
            label="Type"
            errorMessage={errors.type?.message}
          />
        )}
      />
      <View style={{marginTop: 4}} />
      <Controller
        control={control}
        name="number"
        rules={{required: 'Pokemon number is required'}}
        render={({field: {onChange, onBlur, value}}) => (
          <PokeTextInput
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Choose a number for your pokemon"
            label="Number"
            errorMessage={errors.number?.message}
          />
        )}
      />
      <View style={{marginTop: 4}} />
      <Controller
        control={control}
        name="abilities"
        rules={{required: 'Pokemon abilities are required'}}
        render={({field: {onChange, onBlur, value}}) => (
          <PokeTextInput
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Separe the habilities with a empty space"
            label="Abilities"
            errorMessage={errors.abilities?.message}
          />
        )}
      />
      <View style={{marginTop: 4}} />
      <Controller
        control={control}
        name="image"
        rules={{required: 'Pokemon image is required'}}
        render={({field: {onChange, onBlur, value}}) => (
          <PokeTextInput
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Add an url with your pokemon image"
            label="Image"
            errorMessage={errors.image?.message}
          />
        )}
      />
      <View style={{marginTop: 4}} />
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text>Submit Pokemon!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

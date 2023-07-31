import {Text, ScrollView, TouchableOpacity, View, Button} from 'react-native';
import React, { useState } from 'react';
import {Controller, useForm} from 'react-hook-form';
import styles from '../../styles';
import PokeTextInput from '../components/PokeTextInput';
import {usePokemons} from '../hooks/usePokemons';

type FormData = {
  name: string;
  id: string;
  image: string;
  type: string;
  abilities: string;
};

export default function AddPokemonScreen() {
  const {addPokemons} = usePokemons();
  const [showSucces, setShowSucces] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const abilities = data.abilities.split(" ").filter(item => item !== "")
    addPokemons([{...data, abilities, id: data.id + "ctd"}]);
    setShowSucces(true);
    reset();
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
        name="id"
        rules={{required: 'Pokemon number is required'}}
        render={({field: {onChange, onBlur, value}}) => (
          <PokeTextInput
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Choose a number for your pokemon"
            label="Number"
            errorMessage={errors.id?.message}
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
      <View style={styles.submitButton} >
        <Button title='Submit Pokemon' onPress={handleSubmit(onSubmit)}/>
      </View>
      {showSucces && <Text style={styles.successMessage}>Pokemon Submited!</Text>}
    </ScrollView>
  );
}

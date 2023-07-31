import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { usePokemonContext } from '../context/PokemonContextt';
import { RootStackParamList } from '../navigation/Navigationn';
import styles from '../styles/Add.Styless';
import { globalStyles } from '../styles/Themess';
import { Pokemon } from '../types/Typess';

interface AddPokemon {
  name: string;
  id: string;
  image: string;
  type: string;
  abilities: string;
}

const AddPokemonScreen = () => {
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  const {addPokemon} = usePokemonContext();

  const {
    control,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm<AddPokemon>();

  const onSubmit = (_pokemon: AddPokemon) => {
    const pokemon: Pokemon = {
      abilities: _pokemon.abilities
        .split(',')
        .map(
          ability =>
            ability.trim().at(0)?.toUpperCase() +
            ability.trim().substring(1).toLowerCase(),
        ),
      id: +_pokemon.id,
      image: _pokemon.image,
      name: _pokemon.name,
      type: [_pokemon.type],
    };

    addPokemon({...pokemon, id: pokemon.id});
    reset();
    navigate('Home', {init: true});
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView style={globalStyles.container}>
        <Text style={globalStyles.title}>Agrega un nuevo pokémon</Text>
        <Controller
          name="id"
          rules={{required: 'Este campo es obligatorio'}}
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onChangeText={onChange}
              style={styles.input}
              placeholder="Numero de pokemon"
              onBlur={onBlur}
              value={`${value || ''}`}
            />
          )}
        />
        {errors.id && <Text>{errors.id.message}</Text>}
        <Controller
          name="name"
          rules={{required: 'Este campo es obligatorio'}}
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onChangeText={onChange}
              style={styles.input}
              placeholder="Nombre"
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.name && <Text>{errors.name.message}</Text>}
        <Controller
          name="type"
          rules={{required: 'Este campo es obligatorio'}}
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onChangeText={onChange}
              style={styles.input}
              placeholder="Tipo"
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.abilities && <Text>{errors.abilities.message}</Text>}
        <Controller
          name="abilities"
          rules={{required: 'Este campo es obligatorio'}}
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onChangeText={onChange}
              style={styles.input}
              placeholder="Habilidades (Separadas por coma)"
              onBlur={onBlur}
              value={`${value || ''}`}
            />
          )}
        />
        {errors.abilities && <Text>{errors.abilities.message}</Text>}
        <Controller
          name="image"
          rules={{required: 'Este campo es obligatorio'}}
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onChangeText={onChange}
              style={styles.input}
              placeholder="Url imagen"
              onBlur={onBlur}
              value={`${value || ''}`}
            />
          )}
        />
        {errors.image && <Text>{errors.image.message}</Text>}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPokemonScreen;

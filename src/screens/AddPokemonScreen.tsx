import {pokeFormStyles} from '../theme/PokeForm.styles';
import {Pokemon} from '../types';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {usePokemonContext} from '../context/PokemonContext';
import {View, Text, TouchableOpacity} from 'react-native';
import FormInput from '../components/FormInput';
import React from 'react';

const AddPokemonScreen = () => {
  const {navigate} = useNavigation();
  const {control, handleSubmit, formState, reset} = useForm<Pokemon>();
  const {errors} = formState;
  const {addPokemon} = usePokemonContext();

  const handleAddPokemon = (pokemon: Pokemon) => {
    addPokemon({...pokemon, id: Number(pokemon.id + new Date().getDate())});
    reset();
    navigate('Home'); // Modifica la llamada a navigation.navigate
  };

  return (
    <View style={pokeFormStyles.container}>
      <Text style={pokeFormStyles.title}>Add a new Pokémon</Text>
      <FormInput<Pokemon>
        control={control}
        controlName="name"
        error={errors.name?.message}
        required
        inputProps={{
          placeholder: 'Enter Pokémon Name',
        }}
      />

      <FormInput<Pokemon>
        control={control}
        controlName="id"
        error={errors.id?.message}
        required
        inputProps={{
          placeholder: 'Id for pokemon',
        }}
      />

      <FormInput<Pokemon>
        control={control}
        controlName="image"
        error={errors.image?.message}
        required
        inputProps={{
          placeholder: 'Picture for pokemon',
          keyboardType: 'number-pad',
        }}
      />

      <FormInput<Pokemon>
        control={control}
        controlName="type"
        error={errors.type?.message}
        required
        inputProps={{
          placeholder: 'Pokemon type',
        }}
      />

      <FormInput<Pokemon>
        control={control}
        controlName="abilities"
        error={errors.abilities?.message}
        required
        inputProps={{
          placeholder: 'Abilities for pokemon',
        }}
      />

      <TouchableOpacity
        style={pokeFormStyles.submitButton}
        onPress={handleSubmit(handleAddPokemon)}>
        <Text style={pokeFormStyles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPokemonScreen;

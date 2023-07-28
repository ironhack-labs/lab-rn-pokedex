import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles';
import {Pokemon} from '../types';
import {useForm} from 'react-hook-form';
import FormInput from '../components/FormInput';
import {pokeFormStyles} from '../theme/PokeForm.styles';
import {useNavigation} from '@react-navigation/native';
import {usePokemonContext} from '../context/PokemonContext';

const AddPokemonScreen: React.FC = () => {
  const {navigate} = useNavigation();
  const {control, handleSubmit, formState} = useForm<Pokemon>();
  const {errors} = formState;
  const {addPokemon} = usePokemonContext();

  const handleAddPokemon = (pokemon: Pokemon) => {
    addPokemon(pokemon);
    navigate('Home'); // Modifica la llamada a navigation.navigate
  };

  return (
    <View style={pokeFormStyles.container}>
      <Text style={styles.text}>Add a New Pokémon</Text>
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

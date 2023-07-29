import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import type {CustomPokemon} from '../../models';

import {addPokemonFormStyles} from './add-pokemon-form.styles';
import {usePokemonCtx} from '../../context';

type AddPokemonFormValues = CustomPokemon;
type AddPokemonFormProps = {
  onAddPokemonSuccess: () => void;
};

export const AddPokemonForm = ({onAddPokemonSuccess}: AddPokemonFormProps) => {
  const {setCustomPokemon} = usePokemonCtx();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<AddPokemonFormValues>();

  const onSubmit: SubmitHandler<AddPokemonFormValues> = data => {
    setCustomPokemon(data);
    onAddPokemonSuccess();
  };

  return (
    <View style={addPokemonFormStyles.container}>
      <View>
        <Controller
          name="name"
          control={control}
          rules={{required: true}}
          render={({field: {value, onChange}}) => (
            <TextInput
              placeholder="Name"
              style={addPokemonFormStyles.input}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.name && (
          <Text style={addPokemonFormStyles.error}>This is required.</Text>
        )}
      </View>

      <View>
        <Controller
          name="id"
          control={control}
          rules={{required: true}}
          render={({field: {value, onChange}}) => (
            <TextInput
              placeholder="Number"
              inputMode="numeric"
              style={addPokemonFormStyles.input}
              value={value?.toString()}
              onChangeText={onChange}
            />
          )}
        />
        {errors.id && (
          <Text style={addPokemonFormStyles.error}>This is required.</Text>
        )}
      </View>

      <View>
        <Controller
          name="thumbnail"
          control={control}
          render={({field: {value, onChange}}) => (
            <TextInput
              placeholder="Picture"
              style={addPokemonFormStyles.input}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
      </View>

      <View>
        <Controller
          name="type"
          control={control}
          rules={{required: true}}
          render={({field: {value, onChange}}) => (
            <TextInput
              placeholder="Type"
              style={addPokemonFormStyles.input}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.type && (
          <Text style={addPokemonFormStyles.error}>This is required.</Text>
        )}
      </View>

      <View>
        <Controller
          name="ability"
          control={control}
          rules={{required: true}}
          render={({field: {value, onChange}}) => (
            <TextInput
              placeholder="Ability"
              style={addPokemonFormStyles.input}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.ability && (
          <Text style={addPokemonFormStyles.error}>This is required.</Text>
        )}
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={addPokemonFormStyles.submitBtn}
        onPress={handleSubmit(onSubmit)}>
        <Text style={addPokemonFormStyles.submitBtnText}>Submit Pokemon</Text>
      </TouchableOpacity>
    </View>
  );
};

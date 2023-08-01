import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useAppContext } from '../context/AppContext';
import { Pokemon } from '../context/types/Pokemon';
import { useNavigation } from '@react-navigation/native';

const AddPokemonScreen = () => {
  const { handleSubmit, control, formState } = useForm();
  const { addNewPokemon } = useAppContext();
  const navigation = useNavigation();

  const onSubmit = (data: Record<string, string>) => {
    const newPokemon: Pokemon = {
      name: data.name,
      id: parseInt(data.id),
      image: data.image,
      type: data.type.split(',').map((t) => t.trim()),
      abilities: data.abilities.split(',').map((a) => a.trim()),
    };
  
    addNewPokemon(newPokemon);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Pokemon</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Name"
            onBlur={onBlur}
            onChangeText={(text) => onChange(text)}
            value={value}
          />
        )}
        name="name"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.name && <Text style={styles.errorText}>Name is required.</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="ID"
            keyboardType="number-pad"
            onBlur={onBlur}
            onChangeText={(text) => onChange(text)}
            value={value}
          />
        )}
        name="id"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.id && <Text style={styles.errorText}>ID is required.</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Image URL"
            onBlur={onBlur}
            onChangeText={(text) => onChange(text)}
            value={value}
          />
        )}
        name="image"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.image && <Text style={styles.errorText}>Image URL is required.</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Type"
            onBlur={onBlur}
            onChangeText={(text) => onChange(text)}
            value={value}
          />
        )}
        name="type"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.type && <Text style={styles.errorText}>Type is required.</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Abilitiess"
            onBlur={onBlur}
            onChangeText={(text) => onChange(text)}
            value={value}
          />
        )}
        name="abilities"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.abilities && <Text style={styles.errorText}>Abilities are required.</Text>}
      <Button title="Add Pokemon" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});

export default AddPokemonScreen;

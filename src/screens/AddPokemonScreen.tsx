// src/screens/AddPokemonScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import PropTypes from 'prop-types';

interface Props {
  navigation: any; // Replace 'any' with the appropriate type for navigation
}

const AddPokemonScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [abilities, setAbilities] = useState<string>('');

  const handleAddPokemon = () => {
    // Add the new Pokémon to the list of pokemons using the context
    // Navigate back to the HomeScreen after successful submission
  };

  return (
    <View>
      <Text style={{color: '#000000'}}>Name:</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text style={{color: '#000000'}}>Number (id):</Text>
      <TextInput value={id} onChangeText={setId} />
      <Text style={{color: '#000000'}}>Image:</Text>
      <TextInput value={image} onChangeText={setImage} />
      <Text style={{color: '#000000'}}>Type:</Text>
      <TextInput value={type} onChangeText={setType} />
      <Text style={{color: '#000000'}}>Abilities:</Text>
      <TextInput value={abilities} onChangeText={setAbilities} />
      <Button title="Add Pokémon" onPress={handleAddPokemon} />
    </View>
  );
};

AddPokemonScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AddPokemonScreen;

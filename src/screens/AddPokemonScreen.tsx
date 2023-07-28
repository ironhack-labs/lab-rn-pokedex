// src/screens/AddPokemonScreen.tsx
import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {PokemonContext} from '../context/PokemonContext';
import {Pokemon} from '../types';

const AddPokemonScreen: React.FC = ({navigation}) => {
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<number | undefined>(undefined);
  const [image, setImage] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [abilities, setAbilities] = useState<string>('');

  const {dispatch} = useContext(PokemonContext);

  const handleAddPokemon = () => {
    if (
      name.trim() === '' ||
      isNaN(id) ||
      image.trim() === '' ||
      type.trim() === '' ||
      abilities.trim() === ''
    ) {
      // Validate form fields before adding the Pokémon
      alert('Please fill all fields correctly.');
    } else {
      // Create a new Pokémon object
      const newPokemon: Pokemon = {name, url: '', id, image, type, abilities};
      // Dispatch an action to add the new Pokémon to the list
      dispatch({type: 'ADD_POKEMON', payload: newPokemon});
      // Navigate back to the HomeScreen
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={id?.toString()}
        onChangeText={text => setId(parseInt(text, 10))}
        placeholder="ID"
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        value={image}
        onChangeText={setImage}
        placeholder="Image URL"
        style={styles.input}
      />
      <TextInput
        value={type}
        onChangeText={setType}
        placeholder="Type"
        style={styles.input}
      />
      <TextInput
        value={abilities}
        onChangeText={setAbilities}
        placeholder="Abilities"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleAddPokemon} style={styles.addButton}>
        <Text style={styles.addButtonLabel}>Add Pokémon</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  addButtonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddPokemonScreen;

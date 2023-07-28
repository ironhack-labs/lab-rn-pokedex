import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {usePokemonContext} from '../context/PokemonContext';
import styles from '../styles';

const AddPokemonScreen: React.FC = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [abilities, setAbilities] = useState('');
  const navigation = useNavigation();
  const {state, dispatch} = usePokemonContext();

  const handleAddPokemon = () => {
    if (pokemonName) {
      const id = Date.now();

      const newPokemon = {
        name: pokemonName,
        id,
        image: '',
        type: '',
        abilities: abilities.split(',').map(ability => ability.trim()),
      };

      dispatch({type: 'ADD_POKEMON', payload: newPokemon});

      //navigation.navigate('Home'); // Modifica la llamada a navigation.navigate
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add a New Pokémon</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Pokémon Name"
        value={pokemonName}
        onChangeText={setPokemonName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Pokémon Abilities (comma-separated)"
        value={abilities}
        onChangeText={setAbilities}
      />
      <Button title="Add Pokémon" onPress={handleAddPokemon} />
    </View>
  );
};

export default AddPokemonScreen;

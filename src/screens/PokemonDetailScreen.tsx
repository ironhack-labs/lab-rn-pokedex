import React, { useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAppContext } from '../context/AppContext';

const PokemonDetailScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const { state, fetchPokemonDetails } = useAppContext();

  useEffect(() => {
    if (params?.pokemon) {
      fetchPokemonDetails(params.pokemon.id);
    }
  }, [params?.pokemon]);

  const { name, id, types, abilities, sprites } = state.pokemonDetail || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokemon Detail</Text>
      <Text style={styles.info}>Name: {name}</Text>
      <Text style={styles.info}>Number: {id}</Text>
      {types && (
        <Text style={styles.info}>
          Type: {types.map((type: any) => type.type.name).join(', ')}
        </Text>
      )}
      {abilities && (
        <Text style={styles.info}>
          Abilities: {abilities.map((ability: any) => ability.ability.name).join(', ')}
        </Text>
      )}
      {sprites && (
        <Image source={{ uri: sprites.front_default }} style={styles.image} />
      )}
      <Button title="Add Pokemon" onPress={() => navigation.navigate('AddPokemon')} />
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
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
});

export default PokemonDetailScreen;

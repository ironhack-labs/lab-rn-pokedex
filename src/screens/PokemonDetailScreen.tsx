// src/screens/PokemonDetailScreen.tsx
import React, { useContext, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { PokemonContext } from '../context/PokemonContext';
import useFetch from '../hooks/useFetch';

interface Props {
  route: any; // Replace 'any' with the appropriate type for route
  navigation: any; // Replace 'any' with the appropriate type for navigation
}

const PokemonDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { state } = useContext(PokemonContext);
  const { name } = route.params;
  const { data, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  useEffect(() => {
    // Update the context with the Pokémon details
    // You can use the dispatch function from the context to set the Pokémon details in the state
  }, [data]);

  if (loading) {
    return (
      <View>
        <Text style={{color: '#000000'}}>Loading...</Text>
      </View>
    );
  }

  const { id, types, abilities } = data;

  return (
    <View>
      <Image source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png` }} style={{ width: 200, height: 200 }} />
      <Text style={{color: '#000000'}}>{name}</Text>
      <Text style={{color: '#000000'}}>{`#${id}`}</Text>
      {/* Render the Pokémon details */}
      <Button onPress={() => navigation.navigate('AddPokemon')} title='Add New Pokémon' />
    </View>
  );
};

PokemonDetailScreen.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default PokemonDetailScreen;

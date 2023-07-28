// src/components/PokemonCard.tsx
import React from 'react';
import { View, TouchableOpacity, Image, Text} from 'react-native';
import PropTypes from 'prop-types';

interface Pokemon {
  name: string;
  url: string;
}

interface Props {
  pokemon: Pokemon;
  onPress: (pokemon: Pokemon) => void;
}

const PokemonCard: React.FC<Props> = ({ pokemon, onPress }) => {
  const { name, url } = pokemon;
  const pokemonId = url.split('/').slice(-2, -1)[0];
  const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;

  return (
    <TouchableOpacity onPress={() => onPress(pokemon)}>
      <View>
        <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 }} />
        <Text style={{color: '#000000'}}>{name}</Text>
        <Text style={{color: '#000000'}}>{`#${pokemonId}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default PokemonCard;

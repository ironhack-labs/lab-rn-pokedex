import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface PokemonDetailProps {
  route: {params: {name: string; types: string[]}};
}

const PokemonDetailScreen: React.FC<PokemonDetailProps> = ({route}) => {
  const {name, types} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.typesContainer}>
        {types.map((type, index) => (
          <Text key={index} style={styles.type}>
            {type}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  typesContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  type: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginHorizontal: 5,
    backgroundColor: '#c0c0c0',
    color: 'white',
    fontSize: 16,
  },
});

export default PokemonDetailScreen;

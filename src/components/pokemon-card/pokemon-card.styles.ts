import {StyleSheet} from 'react-native';

export const pokemonCardStyles = StyleSheet.create({
  button: {
    flex: 1,
  },
  card: {
    backgroundColor: '#333',
    padding: 20,
    position: 'relative',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  pokemonName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  pokemonNumber: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  pokemonImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

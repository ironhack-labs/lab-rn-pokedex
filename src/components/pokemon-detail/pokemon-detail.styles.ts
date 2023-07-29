import {StyleSheet} from 'react-native';

export const pokemonDetailsStyles = StyleSheet.create({
  home: {
    padding: 20,
    position: 'relative',
    height: 300,
  },
  figure: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  figureBg: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
    backgroundColor: '#333',
  },
  pokeball: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    top: '25%',
    left: '25%',
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 200,
    overflow: 'hidden',
  },
  pokemonImage: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    top: '30%',
    left: '30%',
    height: 150,
    resizeMode: 'cover',
  },
  pokemonTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  rowTitle: {
    color: '#333',
    fontWeight: '700',
  },
  rowValue: {
    color: '#333',
    fontWeight: '400',
  },
  spriteContainer: {
    gap: 20,
    padding: 20,
  },
  sprite: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
});

import {StyleSheet} from 'react-native';

export const addPokemonFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  error: {
    color: 'red',
    fontSize: 10,
    marginTop: 5,
    marginLeft: 5,
  },
  submitBtn: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 4,
  },
  submitBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

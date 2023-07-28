import {StyleSheet} from 'react-native';
import theme from '../theme';

export const pokeFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.colors.background,
  },
  submitButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#e3e4e5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  submitButtonText: {
    fontWeight: '600',
    fontSize: 14,
    color: 'gray',
  },
});

import { StyleSheet } from 'react-native';
import { theme } from './Themes';

export default StyleSheet.create({
  input: {
    width: '100%',
    padding: 20,
    backgroundColor: '#e2e2e2',
    marginBottom: 24,
    borderRadius: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 18,
    marginBottom: 10,
    marginTop: 10,
  },
});

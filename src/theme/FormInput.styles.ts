import {StyleSheet} from 'react-native';

export const formInputStyles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    width: '100%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#6C757D',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  inputWithError: {
    borderColor: 'red',
  },
  errorMessage: {
    fontSize: 14,
    color: 'red',
  },
});

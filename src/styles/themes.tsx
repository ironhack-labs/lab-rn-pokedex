import { DefaultTheme } from '@react-navigation/native';

export default {
  colors: {
    primary: '#007BFF',
    secondary: '#6C757D',
    background: '#F8F9FA',
    text: '#212529',
    error: '#DC3545',
  },
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

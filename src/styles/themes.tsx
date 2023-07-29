import {DefaultTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export default {
  colors: {
    primary: '#5A92A5',
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
    background: '#f2f2f2',
  },
};

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

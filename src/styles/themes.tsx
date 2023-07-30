import { DefaultTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5A92A5',
    secondary: '#6C757D',
    title: '#17171B',
    subtitle: '#17171B',
    text: '#747476',
    border: '#5A92A5',
    background: '#f2f2f2',
  },
};

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    color: theme.colors.title,
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 34,
    marginTop: 40,
    marginBottom: 20,
  },
  text: {
    color: theme.colors.text,
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 18,
    marginBottom: 10,
    marginTop: 10,
  },
  subtitle: {
    color: theme.colors.subtitle,
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26,
    marginVertical: 20,
  },
});

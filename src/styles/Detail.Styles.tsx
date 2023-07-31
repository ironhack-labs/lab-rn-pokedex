import { StyleSheet } from 'react-native';
import { theme } from './Themes';

export default StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    objectFit: 'cover',
    overflow: 'hidden',
  },
  textId: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 14,
    color: 'rgba(23, 23, 27, 0.60)',
    textAlign: 'center',
  },
  textName: {
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 28,
    color: '#ffffff',
    textTransform: 'capitalize',
    textAlign: 'center',
    marginBottom: 40,
  },
  information: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  description: {
    backgroundColor: '#ffffff',
    height: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    display: 'flex',
    padding: 30,
  },
  subtitle: {
    color: theme.colors.primary,
    fontSize: 20,
    fontStyle: 'normal',
    lineHeight: 26,
    marginBottom: 10,
    marginTop: 10,
  },
});

import {StyleSheet} from 'react-native';
import themes from './Themes';

export default StyleSheet.create({
  container: {
    marginBottom: 20,
    borderRadius: 10,
    height: 100,
    width: '100%',
    backgroundColor: '#5A92A5',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    padding: 20,
  },
  textId: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 14,
    color: 'rgba(23, 23, 27, 0.60)',
  },
  textName: {
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 28,
    color: '#ffffff',
  },
  image: {
    width: 100,
    height: 100,
    position: 'absolute',
    objectFit: 'cover',
    right: -20,
    top: -20,
    zIndex: 9,
  },
  imageBall: {
    position: 'absolute',
    objectFit: 'cover',
    right: 0,
    top: 0,
  },
});

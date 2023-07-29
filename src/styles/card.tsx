import {StyleSheet} from 'react-native';
import themes from './themes';

export default StyleSheet.create({
  container: {
    margin: 8,
    padding: 16,
    height: 50,
    borderRadius: 10,
    background: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    backgroundColor: themes.colors.primary,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
});

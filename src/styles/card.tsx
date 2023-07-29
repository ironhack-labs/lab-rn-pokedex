import {StyleSheet} from 'react-native';
import themes from './themes';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
    borderRadius: 10,
    background: '#ffffff',
    width: "100%",
    backgroundColor: themes.colors.primary,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
});

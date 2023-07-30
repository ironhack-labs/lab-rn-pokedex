import {StyleSheet} from 'react-native';

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
  },
  textName: {
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 28,
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  information: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center"
  },
  description: {},
  subtitle: {},
});

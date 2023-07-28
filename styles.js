import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  image: {
    width: '35%',
    height: 80,
    borderRadius: 40,
  },
  details: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  typesContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  type: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginRight: 5,
    backgroundColor: theme.colors.secondary,
    color: 'white',
  },
});

export default styles;

import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {CustomPokemonT} from '../context/context';

export const Card = ({id, name, image, abilities, type}: CustomPokemonT) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigate('PokemonDetail', {info: {id, name, image, abilities, type}})
      }>
      <View style={styles.information}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.id}>{id}</Text>
      </View>
      <Image style={styles.img} source={{uri: image}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 20,
    color: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  information: {
    gap: 10,
  },
  textName: {
    color: 'white',
    fontWeight: '700',
  },
  id: {
    color: 'white',
  },
  img: {
    width: 60,
    height: 60,
  },
});

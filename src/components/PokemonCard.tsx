import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DataT} from '../context/context';
import {useGetPokemonDetail} from '../hooks/useGetPokemonDetail';
import {Pokemon} from '../context/pokemon-type';

type PropsT = {
  pokemon: DataT | Pokemon;
};

export const PokemonCard = (props: PropsT) => {
  const {pokemon} = props;
  const {pokemon: info} = useGetPokemonDetail(pokemon.name, pokemon.url);
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('PokemonDetail', {info})}>
      <View style={styles.information}>
        <Text style={styles.textName}>{pokemon.name}</Text>
        <Text style={styles.id}>{info?.id || '0'}</Text>
      </View>
      <Image style={styles.img} source={{uri: info?.sprites.front_default}} />
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

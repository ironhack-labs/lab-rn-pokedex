import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {DataT} from '../screens/HomeScreen';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type PropsT = {
  pokemon: DataT;
};

export type PokemonT = {
  id: number;
  name: string;
  type: string;
  abilities: string;
};

export const PokemonCard = (props: PropsT) => {
  const {pokemon} = props;
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [image, setImage] = useState('');
  const [detailedInformation, setDetailedInformation] =
    useState<PokemonT | null>();
  console.log(detailedInformation);

  useEffect(() => {
    fetch(pokemon.url)
      .then(response => response.json())
      .then(result => {
        const {id, type, abilities} = result;
        const url = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

        setDetailedInformation({
          id,
          name: pokemon.name,
          type: type[0].type,
          abilities: abilities[0].ability,
        });

        return fetch(url);
      })
      .then(response => response.json())
      .then(result => setImage(result));
  }, [pokemon.url]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('PokemonDetail', {info: detailedInformation})}>
      <View style={styles.information}>
        <Text style={styles.textName}>{pokemon.name}</Text>
        <Text style={styles.id}>{detailedInformation?.id || '0'}</Text>
      </View>
      <Image
        style={styles.img}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
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

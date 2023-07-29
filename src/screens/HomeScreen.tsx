import {Button, SafeAreaView} from 'react-native';
import {PokemonList} from '../components/PokemonList';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator';

export const HomeScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <>
      <SafeAreaView>
        <Button title="Add Pokemon" onPress={() => navigate('AddPokemon')} />
        <PokemonList />
      </SafeAreaView>
    </>
  );
};

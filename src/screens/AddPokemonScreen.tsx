import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {usePokedex} from '../context/context';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator';
import styles from '../styles';

type DataT = {
  id: string;
  name: string;
  image: string;
  type: string;
  abilities: string;
};

export const AddPokemonScreen = () => {
  const {addPokemon} = usePokedex();
  const {control, handleSubmit} = useForm<DataT>();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onSubmit = (data: DataT) => {
    const id = Number(data.id);
    const pokemon = {
      id,
      name: data.name,
      type: data.type,
      image: data.image,
      abilities: data.abilities,
    };

    addPokemon(pokemon);
    navigate('Home');
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Controller
          name="name"
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              placeholder="Type the name here"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          name="id"
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              keyboardType="numeric"
              placeholder="Type the id here"
            />
          )}
        />
        <Controller
          name="image"
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              placeholder="Place the url here"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          name="type"
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              placeholder="Place the type here"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          name="abilities"
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              placeholder="Type the abilities here"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </SafeAreaView>
    </>
  );
};

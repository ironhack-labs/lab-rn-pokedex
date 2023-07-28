import React, {useContext, useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, ToastAndroid, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PokemonContext} from '../context/PokemonContext';
import {PokemonForm} from '../interfaces/Pokemon';
import { AddButton } from '../components/AddButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme';
import { styles } from '../styles';

type Props = NativeStackScreenProps<RootStackParamList, "AddPokemon">;

export const AddPokemonScreen = ({navigation, route}: Props) => {
  const {setPokemonsList, pokemonState, addPokemon} = useContext(PokemonContext);

  const [pokemonData, setpokemonData] = useState<PokemonForm>({
    name: '',
    id: pokemonState.items.length + 1,
    image: '',
    type: '',
    abilities: '',
  });
  const [errorMsg, seterrorMsg] = useState("")

  const setValue = (key: keyof typeof pokemonData, value: string) => {
    let auxPokemonData = {...pokemonData};
    switch (key) {
      case 'name':
        auxPokemonData['name'] = value;
        break;

      case 'image':
        auxPokemonData['image'] = value;
        break;

      case 'type':
        auxPokemonData['type'] = value;
        break;

      case 'abilities':
        auxPokemonData['abilities'] = value;
        break;

      default:
        break;
    }
    setpokemonData(auxPokemonData);
  };

  const onAddPokemon = () => {
    if(validate()){
      addPokemon(pokemonData)
      navigation.navigate("Home")
    }else{ 
      seterrorMsg("Todos los campos son obligatorios")
    }
  }

  const validate = () => {
    if(pokemonData.name === "")
      return false;
    if(pokemonData.image === "")
      return false;
    if(pokemonData.type === "")
      return false;
    if(pokemonData.abilities === "")
      return false;

    return true;
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{alignItems: 'center', height:"75%", width: "100%", justifyContent:"space-between"}}>
        <TextInput
          placeholder="Name"
          style={styles.formTextInput}
          value={pokemonData.name}
          onChange={e => setValue('name', e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Id"
          style={styles.formTextInput}
          value={pokemonData.id.toString()}
          editable={false}
        />
        <TextInput
          placeholder="Image"
          style={styles.formTextInput}
          value={pokemonData.image}
          onChange={e => setValue('image', e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Type"
          style={styles.formTextInput}
          value={pokemonData.type}
          onChange={e => setValue('type', e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Abilities"
          style={styles.formTextInput}
          value={pokemonData.abilities}
          onChange={e => setValue('abilities', e.nativeEvent.text)}
        />
        <Text style={{color:"red"}}>{errorMsg}</Text>
        <AddButton
          onPress={onAddPokemon}
        />
      </View>
    </SafeAreaView>
  );
};



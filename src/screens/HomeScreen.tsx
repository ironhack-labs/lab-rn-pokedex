import React, {useContext, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PokemonList} from '../components/PokemonList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { AddButton } from '../components/AddButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation, route}: Props) => {
  return (
    <SafeAreaView style={{flex: 1, alignItems:"center"}}>
      <PokemonList
        onPress={item => navigation.navigate('PokemonDetail', {details: item})}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          width: '80%',
          alignSelf: 'center',
        }}>
        <AddButton
          onPress={() => navigation.navigate("AddPokemon")}
        />
      </View>
    </SafeAreaView>
  );
};

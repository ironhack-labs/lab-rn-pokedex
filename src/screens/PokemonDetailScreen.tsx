import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackParamList } from '../navigation/AppNavigator';
import { PokemonDetail } from '../components/PokemonDetail';

type Props = NativeStackScreenProps<RootStackParamList, "PokemonDetail">;

export const PokemonDetailScreen = ({route, navigation} : Props) => {
  const {details} = route.params;

  return (
    <SafeAreaView style={{flex:1}}>
      <PokemonDetail details={details}/>
    </SafeAreaView>
  )
}

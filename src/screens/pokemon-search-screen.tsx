import React, {useState, FC} from 'react'
import { View, Dimensions } from 'react-native';
import { PokemonSearchProps } from '../navigation/app-navigator.types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { InputSearch } from '../components/input-search/InputSearch';
const deviceWidth = Dimensions.get('window').width;

export const PokemonSearchScreen:FC<PokemonSearchProps> = () => {

  const[pokemonHint, setPokemonHint] = useState('');
  const {top} = useSafeAreaInsets()

  return (
    <View style={{flex:1, marginTop: top + 50}}>
      <View style={{marginHorizontal: 20}}>
        <InputSearch style={{
          position: 'absolute',
          zIndex: 999,
          width: deviceWidth - 40,
          top: top - 20
        }} onDispatchDebounce={(value) => setPokemonHint(value)} />
      </View>
    </View>
  )
};

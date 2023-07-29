import React, {useState, useEffect} from 'react'
import { StyleSheet, ViewStyle } from 'react-native';
import { View, StyleProp } from 'react-native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { useDebouncerPokemon } from '../../hooks';

interface Props {
  onDispatchDebounce: (pokemonHint: string,) => void;
  style?: StyleProp<ViewStyle>;
}

export const InputSearch = ({style, onDispatchDebounce}: Props) => {

  const[searchValue,  setSearchValue] = useState('');
  const debounceInput = useDebouncerPokemon(searchValue, 1500);
  

  useEffect(() => {
    onDispatchDebounce(searchValue)
  }, [debounceInput])
  

  return (
    <GestureHandlerRootView>
    <View style={{...style as any}}>
      <View style={{...styles.textFocus}}>
        <TextInput  
          style={{...styles.textInput}} 
          placeholder="Busca un pókemon" 
          autoCorrect={false} 
          value={searchValue} 
          onChangeText={setSearchValue}
        />
      </View>
    </View>
    </GestureHandlerRootView>
  )
};


const styles = StyleSheet.create({
  textFocus: {
    backgroundColor: '#EAEAEA',
    borderRadius: 60,
    height: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 20
  }
})
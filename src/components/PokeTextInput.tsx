import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from '../../styles';
import theme from '../../theme';

type PokeTextInputProps = {
  onChangeText: (txt: string) => void;
  onBlur: () => void;
  placeholder: string;
  label: string;
  errorMessage?: string;
  value: string;
};

export default function PokeTextInput({
  errorMessage,
  label,
  onBlur,
  onChangeText,
  placeholder,
  value,
}: PokeTextInputProps) {
  return (
    <>
      <Text style={{paddingLeft: 16, fontWeight: 'bold', color: errorMessage ? 'red' : 'gray'}}>{label}</Text>  
      <TextInput
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        style={[styles.pokeTextInput, errorMessage ? { borderColor: 'red', color: 'red' } : {}]}
        placeholderTextColor={errorMessage ? 'red' : undefined}
      />
      <Text style={{paddingLeft: 16, color: errorMessage ? 'red' : 'gray'}}>{errorMessage}</Text>
    </>
  );
}

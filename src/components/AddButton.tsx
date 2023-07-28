import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../theme';
import { styles } from '../styles';

export const AddButton = ({onPress} : {onPress : () => void}) => {
  return (
    <TouchableOpacity
      style={styles.addButton}
      onPress={onPress}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
        Agregar pokemon
      </Text>
    </TouchableOpacity>
  );
};

import {View, Text} from 'react-native';
import React, {FC} from 'react';
import type {HomeScreenProps} from '../navigation/app-navigator.types';

export const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <View>
      <Text>home screen</Text>
    </View>
  );
};

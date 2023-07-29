import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabs} from './BottomTabs';

export const AppNavigator = () => (
  <NavigationContainer>
    <BottomTabs />
  </NavigationContainer>
);

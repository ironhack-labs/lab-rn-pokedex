import React from 'react'
import { Text, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
return (
  <NavigationContainer>
    <AppNavigator/>
  </NavigationContainer>
);
}

export default App
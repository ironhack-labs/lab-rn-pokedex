import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import TabNavigator from './src/navigation/TabNavigator';

function App(): JSX.Element {
  return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
  );
}

export default App;

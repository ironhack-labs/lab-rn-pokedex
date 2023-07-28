import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigator from './src/navigation/TabNavigator';
import {AppContextProvider} from './src/navigation/context';

function App(): JSX.Element {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </AppContextProvider>
  );
}

export default App;

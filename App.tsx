import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {PokedexProvider} from './src/context/context';

function App(): JSX.Element {
  return (
    <PokedexProvider>
      <AppNavigator />
    </PokedexProvider>
  );
}

export default App;

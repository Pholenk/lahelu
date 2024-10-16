import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Store } from './src';
import './src/utils/gesture-handler.native';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>{/* Screen configuration */}</NavigationContainer>
    </Provider>
  );
};

export default App;

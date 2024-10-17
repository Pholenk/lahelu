import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Store } from '@data-source';
import { DrawerNavigator } from '@navigation';
import { Platform } from 'react-native';

if (Platform.OS !== 'web') {
  import('react-native-gesture-handler');
}

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

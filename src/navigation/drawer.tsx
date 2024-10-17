import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { BottomTabs } from '@navigation';
import { CustomSideDrawer, CustomSideDrawerStyle } from '@ui';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSideDrawer {...props} />}
      screenOptions={{
        drawerStyle: CustomSideDrawerStyle.container,
      }}
    >
      <Drawer.Screen name="Home" component={BottomTabs} />
    </Drawer.Navigator>
  );
}

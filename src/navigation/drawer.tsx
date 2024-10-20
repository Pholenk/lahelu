import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { BottomTabs } from '@navigation';
import { CustomSideDrawer, CustomSideDrawerStyle, Header } from '@ui';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSideDrawer {...props} />}
      screenOptions={{
        drawerStyle: CustomSideDrawerStyle.container,
        header: () => {
          return <Header />;
        },
        swipeEnabled: false,
      }}
    >
      <Drawer.Screen name="Home" component={BottomTabs} />
    </Drawer.Navigator>
  );
}

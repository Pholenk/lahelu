import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  CirclePlusIcon,
  HomeIcon,
  HomeTemplate,
  ProfileIcon,
  TopicsIcon,
} from '@ui';
import { PRIMARY } from '@utils';
import React from 'react';
import { TabNames } from './types';

const BottomTab = createBottomTabNavigator();
const DefaultScreen = () => null;
const IconCollections: {
  [K in TabNames]: { focus: React.JSX.Element; default: React.JSX.Element };
} = {
  Main: {
    focus: <HomeIcon color={PRIMARY} />,
    default: <HomeIcon />,
  },
  Topic: {
    focus: <TopicsIcon color={PRIMARY} />,
    default: <TopicsIcon />,
  },
  Post: {
    focus: <CirclePlusIcon color={PRIMARY} />,
    default: <CirclePlusIcon />,
  },
  Profile: {
    focus: <ProfileIcon color={PRIMARY} />,
    default: <ProfileIcon />,
  },
};

export function BottomTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const { name } = route;
          return focused
            ? IconCollections?.[name]?.focus
            : IconCollections?.[name]?.default;
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <BottomTab.Screen name="Main" component={HomeTemplate} />
      <BottomTab.Screen name="Topic" component={DefaultScreen} />
      <BottomTab.Screen name="Post" component={DefaultScreen} />
      <BottomTab.Screen name="Profile" component={DefaultScreen} />
    </BottomTab.Navigator>
  );
}

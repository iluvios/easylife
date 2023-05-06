import React, {useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconImageComponent from '../components/iconImage';
import MessagesIcon from '../assets/icons/messages.png';
import SearchIcon from '../assets/icons/search.png';
import HomeIcon from '../assets/icons/home.png';
import Dashboard from '../screens/dashboard';
import ExploreScreen from '../screens/explore';
import FaqsScreen from '../screens/faqs';
import WalkthroughScreen from '../screens/walkthrough';
import {
  loading,
  dashboard,
  explore,
  support,
  walkthrough,
  home,
} from '../util/const';
import {white, platinum, turquoise} from '../assets/styles/const';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={walkthrough}>
      <Stack.Screen
        name={walkthrough}
        component={WalkthroughScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={home}
        component={MainTab}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const MainTab = () => {
  const IconComponent = useCallback(
    (color, icon) => (
      <IconImageComponent image={icon} width={30} height={30} color={color} />
    ),
    [],
  );
  return (
    <Tab.Navigator
      initialRouteName={loading}
      screenOptions={{
        tabBarInactiveTintColor: platinum,
        tabBarActiveTintColor: turquoise,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: white,
        },
      }}>
      <Tab.Screen
        name={dashboard}
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => IconComponent(color, HomeIcon),
        }}
      />
      <Tab.Screen
        name={explore}
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => IconComponent(color, SearchIcon),
        }}
      />
      <Tab.Screen
        name={support}
        component={FaqsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => IconComponent(color, MessagesIcon),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;

import React, {useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconImageComponent from '../components/iconImage';
import MessagesIcon from '../assets/icons/message-white.png';
import SearchIcon from '../assets/icons/search.png';
import HomeIcon from '../assets/icons/home.png';
import DashboardScreen from '../screens/dashboard';
import ExploreScreen from '../screens/explore';
import FaqsScreen from '../screens/faqs';
import WalkthroughScreen from '../screens/walkthrough';
import ServiceScreen from '../screens/service';
import RequestServiceScreen from '../screens/requestService';
import SearchMapScreen from '../screens/searchMap';
import OnTheWayMapScreen from '../screens/onTheWayMap';
import ArriveMapScreen from '../screens/arriveMap';
import RateScreen from '../screens/rate';
import ProfileScreen from '../screens/profile';
import {
  service,
  dashboardStack,
  dashboard,
  explore,
  support,
  walkthrough,
  home,
  requestService,
  searchMap,
  onTheWayMap,
  arriveMap,
  rateService,
  profile,
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
      <Stack.Screen
        name={service}
        component={ServiceScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={requestService}
        component={RequestServiceScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={searchMap}
        component={SearchMapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={onTheWayMap}
        component={OnTheWayMapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={arriveMap}
        component={ArriveMapScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const DashboardStack = () => {
  return (
    <Stack.Navigator initialRouteName={dashboard}>
      <Stack.Screen
        name={dashboard}
        component={DashboardScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={rateService}
        component={RateScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={profile}
        component={ProfileScreen}
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
      initialRouteName={dashboardStack}
      screenOptions={{
        tabBarInactiveTintColor: platinum,
        tabBarActiveTintColor: turquoise,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: white,
        },
      }}>
      <Tab.Screen
        name={dashboardStack}
        component={DashboardStack}
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

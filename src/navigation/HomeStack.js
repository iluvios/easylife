import React, {useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconImageComponent from '../components/iconImage';
import MessagesIcon from '../assets/icons/message-white.png';
import SearchIcon from '../assets/icons/search-normal.png';
import HomeIcon from '../assets/icons/home.png';
import DashboardScreen from '../screens/dashboard';
import ExploreScreen from '../screens/explore';
import SupportScreen from '../screens/support';
import WalkthroughScreen from '../screens/walkthrough';
import ServiceScreen from '../screens/service';
import RequestServiceScreen from '../screens/requestService';
import SearchMapScreen from '../screens/searchMap';
import OnTheWayMapScreen from '../screens/onTheWayMap';
import ArriveMapScreen from '../screens/arriveMap';
import CanceledServiceScreen from '../screens/canceledService';
import RateScreen from '../screens/rate';
import RateProfileScreen from '../screens/rateProfile';
import ScheduleScreen from '../screens/schedule';
import ProgrammingScreen from '../screens/programming';
import ServicesScreen from '../screens/services';
import ScheduledScreen from '../screens/scheduled';
import FaqsScreen from '../screens/faqs';
import UserProfileScreen from '../screens/userProfile';
import LoadingScreen from '../screens/loading';
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
  rateProfile,
  canceledService,
  schedule,
  programming,
  services,
  scheduled,
  faqsStack,
  faqs,
  userProfile,
  loading,
} from '../util/const';
import {white, platinum, turquoise} from '../assets/styles/const';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={loading}>
      <Stack.Screen
        name={loading}
        component={LoadingScreen}
        options={{
          headerShown: false,
        }}
      />
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
      <Stack.Screen
        name={canceledService}
        component={CanceledServiceScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={schedule}
        component={ScheduleScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={programming}
        component={ProgrammingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={services}
        component={ServicesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={scheduled}
        component={ScheduledScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const SupportStack = () => {
  return (
    <Stack.Navigator initialRouteName={support}>
      <Stack.Screen
        name={support}
        component={SupportScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={faqs}
        component={FaqsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={userProfile}
        component={UserProfileScreen}
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
        name={rateProfile}
        component={RateProfileScreen}
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
        name={faqsStack}
        component={SupportStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => IconComponent(color, MessagesIcon),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;

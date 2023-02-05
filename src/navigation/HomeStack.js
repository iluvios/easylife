import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="test"
      screenOptions={{
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name="test"
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <Icon name="play-circle" color={color} size={size} />
          ),
        }}
        component={() => <Text>test</Text>}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;

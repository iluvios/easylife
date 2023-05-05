import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../screens/register';
import LoginScreen from '../screens/login';
import CodeRecoveryPasswordScreen from '../screens/codeRecoveryPassword';
import PasswordRecoveryScreen from '../screens/passwordRecovery';
import NewPasswordScreen from '../screens/newPassword';
import {
  login,
  register,
  passwordRecovery,
  passwordCode,
  newPassword,
} from '../util/const';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={login}
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={register}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={passwordRecovery}
        component={PasswordRecoveryScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={passwordCode}
        component={CodeRecoveryPasswordScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={newPassword}
        component={NewPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

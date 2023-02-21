import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterPage from '../screens/register';
import LoginPage from '../screens/login';
import CodeRecoveryPasswordScreen from '../screens/codeRecoveryPassword';
import PasswordRecovery from '../screens/passwordRecovery';
import {
  login,
  register,
  recuperarContraseña,
  contraseñaCodigo,
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
        component={LoginPage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={register}
        component={RegisterPage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={recuperarContraseña}
        component={PasswordRecovery}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={contraseñaCodigo}
        component={CodeRecoveryPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

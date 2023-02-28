import React, { useState, useContext } from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import { Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import IconImageComponent from '../components/iconImage';
import CheckBox from '@react-native-community/checkbox';
import PhoneIcon from '../assets/icons/phone.png';
import LockIcon from '../assets/icons/lock.png';

const LoginScreen = ({ navigation }) => {
  const { login, setErrorMessage, handleModalVisible, setModal } =
    useContext(AuthContext);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChangeInput = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const handleLogin = () => {
    if (state.email !== '' && state.password !== '') {
      login(state.email, state.password);
    } else {
      setModal({
        title: 'Error de inicio de sesión',
      });
      setErrorMessage('Todos los campos son obligatorios');
      handleModalVisible();
    }
  };
  return <View className="w-full">
    <View
      className="bg-white shadow-md pt-11 pb-14 mx-1"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        borderRadius: 36,
      }}>
      <View className="mb-7 flex justify-center items-center">
        <Image source={require('../assets/images/logo.png')} />
      </View>
      <View className="mb-7 flex justify-center items-center">
        <Text className="text-base font-bold h1 text-black"
          style={{ /* "fontSize": "11px" */ }}>Iniciar sesión</Text>
      </View>
      <View className="mx-6">
        <View className="bg-white flex flex-row justify-center items-center shadow appearance-none border rounded-md w-full leading-tight focus:outline-none focus:shadow-outline">
          <View className="pl-4">
            <IconImageComponent
              image={PhoneIcon}
              // color={blackThirdTone}
              height={18}
              width={18}
            />
          </View>
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            className="text-base flex-1 ml-2 py-4 text-white"
            placeholder="Celular"
            placeholderTextColor={"#000000"}
            onChangeText={value => handleChangeInput('email', value)}
            style={{
              fontFamily: 'Comfortaa',
            }}
          />
        </View>
        <View className="mt-5 bg-white flex flex-row justify-center items-center shadow appearance-none border rounded-md w-full leading-tight focus:outline-none focus:shadow-outline">
          <View className="pl-4">
            <IconImageComponent
              image={LockIcon}
              // color={blackThirdTone}
              height={19}
              width={19}
            />
          </View>
          <TextInput
            autoCorrect={false}
            secureTextEntry={true}
            className="text-base flex-1 ml-3 py-4 text-gray"
            placeholder="Contraseña"
            placeholderTextColor={"#000000"}
            onChangeText={value => handleChangeInput('password', value)}
            style={{
              fontFamily: 'Comfortaa',
            }}
          />
        </View>
        <View className="flex flex-row mt-5">
          <CheckBox
            tintColors={{ true: '#007AFF', false: '#8E8E91' }}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text className="py-1 text-sm text-blackThirdTone">
            Acepto <Text className="underline text-blue">T Y C</Text>
          </Text>
        </View>
        <View className="pt-2 pl-1">
          <Text className="underline text-sm">¿Olvidaste tu contraseña?</Text>
        </View>
      </View>
      <View className="mx-6 mt-7">
        <TouchableHighlight
          className="bg-blue py-4 rounded flex justify-center items-center"
          // onPress={() => handleLogin()}>
          onPress={() => navigation.navigate('Dashboard')}>
          <Text className="text-base font-bold text-white">INGRESAR</Text>
        </TouchableHighlight>
      </View>
      <View className="mx-6 mt-5">
        <TouchableHighlight
          className="bg-black py-4 rounded flex justify-center items-center border-gray border-2"
          onPress={() => navigation.navigate('Register')}>
          <Text className="text-base font-bold text-black">REGISTRARME</Text>
        </TouchableHighlight>
      </View>
    </View>
  </View >
};

export default LoginScreen;

import React, {useState, useContext} from 'react';
import * as Animatable from 'react-native-animatable';
import {AuthContext} from '../navigation/AuthProvider';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import IconImageComponent from '../components/iconImage';
import ModalComponent from '../components/modal';
import EmailIcon from '../assets/icons/sms.png';
import LockIcon from '../assets/icons/lock.png';
import FacebookIcon from '../assets/icons/facebook.png';
import GoogleIcon from '../assets/icons/google.png';
import AppleIcon from '../assets/icons/apple.png';
import PersonIcon from '../assets/icons/person.png';
import {platinum, blueberry} from '../assets/styles/const';
import {register, terms} from '../util/const';

const RegisterScreen = ({navigation}) => {
  const {login, setErrorMessage, handleModalVisible, setModal} =
    useContext(AuthContext);
  const [isNameClicked, setIsNameClicked] = useState(false);
  const [isEmailClicked, setIsEmailClicked] = useState(false);
  const [isPasswordClicked, setIsPasswordClicked] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChangeInput = (name, value) => {
    setState({...state, [name]: value});
  };

  //TODO:  funcionalidad pendiente
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

  const handleToggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView className="w-full bg-white">
      <View>
        <View className="flex justify-center items-center mt-14">
          <Animatable.View animation="fadeInUp">
            <Image source={require('../assets/images/logo-blue.png')} />
          </Animatable.View>
        </View>
        <Animatable.View animation="fadeIn">
          <Text
            style={{
              fontFamily: 'Comfortaa-Bold',
            }}
            className="text-center text-3xl text-black my-10 leading-8">
            Registrarme
          </Text>
          <View className="mx-3">
            <View
              className={`flex flex-row justify-center items-center appearance-none border rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline 
          ${isNameClicked ? 'border-blueberry' : 'border-platinum'}`}>
              <View className="pl-4">
                <IconImageComponent
                  image={PersonIcon}
                  color={isNameClicked ? blueberry : platinum}
                  height={19}
                  width={19}
                />
              </View>
              <TextInput
                onFocus={() => setIsNameClicked(true)}
                onBlur={() => setIsNameClicked(false)}
                autoCapitalize="words"
                className="text-sm flex-1 ml-2 py-3 text-black"
                placeholder="Nombre y apellido"
                placeholderTextColor={platinum}
                onChangeText={value => handleChangeInput('name', value)}
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
              />
            </View>
            <View
              className={`mt-5 flex flex-row justify-center items-center appearance-none border rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline 
          ${isEmailClicked ? 'border-blueberry' : 'border-platinum'}`}>
              <View className="pl-4">
                <IconImageComponent
                  image={EmailIcon}
                  color={isEmailClicked ? blueberry : platinum}
                  height={19}
                  width={19}
                />
              </View>
              <TextInput
                onFocus={() => setIsEmailClicked(true)}
                onBlur={() => setIsEmailClicked(false)}
                autoCapitalize="none"
                keyboardType="email-address"
                className="text-sm flex-1 ml-2 py-3 text-black"
                placeholder="Correo electronico"
                placeholderTextColor={platinum}
                onChangeText={value => handleChangeInput('email', value)}
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
              />
            </View>
            <View
              className={`mt-5 flex flex-row justify-center items-center appearance-none border rounded-md w-full leading-tight focus:outline-none focus:shadow-outline 
          ${isPasswordClicked ? 'border-blueberry' : 'border-platinum'}`}>
              <View className="pl-4">
                <IconImageComponent
                  image={LockIcon}
                  color={isPasswordClicked ? blueberry : platinum}
                  height={19}
                  width={19}
                />
              </View>
              <TextInput
                onFocus={() => setIsPasswordClicked(true)}
                onBlur={() => setIsPasswordClicked(false)}
                autoCorrect={false}
                secureTextEntry={true}
                className="text-sm flex-1 ml-3 py-3 text-black"
                placeholder="Contraseña"
                placeholderTextColor={platinum}
                onChangeText={value => handleChangeInput('password', value)}
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
              />
            </View>
            <Animatable.View animation="fadeInDown">
              <TouchableHighlight
                className="bg-blueberry mt-10 py-4 rounded-full flex justify-center items-center"
                onPress={handleToggleModal}>
                <Text
                  style={{
                    fontFamily: 'Manrope-Bold',
                  }}
                  className="text-xl text-white">
                  Continuar
                </Text>
              </TouchableHighlight>
            </Animatable.View>
            <View className="mt-4 flex flex-row py-5 justify-center items-center">
              <View className="w-2/6 border-t border-x-platinum border-platinum" />
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="mx-4 text-platinum text-lg">
                Ingresa con
              </Text>
              <View className="w-2/6 border-t border-x-platinum border-platinum" />
            </View>
            <Animatable.View
              animation="fadeInRight"
              className="flex flex-row justify-between items-center">
              <TouchableHighlight
                className="bg-white p-3 rounded-md flex justify-center items-center border-blueberry w-12 h-12"
                style={{borderWidth: 1}}
                onPress={() => navigation.navigate(register)}>
                <IconImageComponent
                  image={FacebookIcon}
                  color={blueberry}
                  height={26}
                  width={13}
                />
              </TouchableHighlight>
              <TouchableHighlight
                className="bg-white p-3 rounded-md flex justify-center items-center border-blueberry w-12 h-12"
                style={{borderWidth: 1}}
                onPress={() => navigation.navigate(register)}>
                <IconImageComponent
                  image={GoogleIcon}
                  color={blueberry}
                  height={23}
                  width={23}
                />
              </TouchableHighlight>
              <TouchableHighlight
                className="bg-white p-3 rounded-md flex justify-center items-center border-blueberry w-12 h-12"
                style={{borderWidth: 1}}
                onPress={() => navigation.navigate(register)}>
                <IconImageComponent
                  image={AppleIcon}
                  color={blueberry}
                  height={30}
                  width={23}
                />
              </TouchableHighlight>
            </Animatable.View>
            <TouchableHighlight
              className="bg-white my-10 py-4 rounded-full flex justify-center items-center border-turquoise"
              style={{borderWidth: 1}}
              onPress={() => navigation.navigate(register)}>
              <Text
                style={{
                  fontFamily: 'Manrope-Bold',
                }}
                className="text-xl text-turquoise">
                Ya tengo cuenta
              </Text>
            </TouchableHighlight>
          </View>
        </Animatable.View>
      </View>
      <ModalComponent
        isVisible={isModalVisible}
        handleBackButtonPress={handleToggleModal}
        handleBackdropPress={handleToggleModal}>
        <Text
          style={{
            fontFamily: 'Comfortaa-Bold',
          }}
          className="mt-8 text-black text-3xl text-center">
          Atención
        </Text>
        <View className="mx-2">
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-chineseblack text-lg my-6 text-center">
            Al registrarte aceptas los terminos y condiciones con los que
            operamos para ofrecerte el mejor servicio, si deseas conocer tus
            derechos, los terminos y/ó condiciones de la plataforma visita el
            siguiente link.
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            onPress={() => {
              handleToggleModal();
              navigation.navigate(terms);
            }}
            className="mb-10 text-blueberry text-lg text-center">
            Mis derechos, términos y condiciones
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-chineseblack text-lg text-center">
            Puedes revisarlo en cualquier momento en:
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-platinum text-lg text-center">
            Mi perfil <Text className="text-turquoise">{'>'}</Text>
            Mis derechos <Text className="text-turquoise">{'>'}</Text>
            Términos y condiciones
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            onPress={handleToggleModal}
            className="text-blueberry text-lg text-center mt-6 mb-8">
            Aceptar y continuar
          </Text>
        </View>
      </ModalComponent>
    </ScrollView>
  );
};

export default RegisterScreen;

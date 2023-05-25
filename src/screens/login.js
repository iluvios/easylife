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
import ModalComponent from '../components/modal';
import IconImageComponent from '../components/iconImage';
import EmailIcon from '../assets/icons/sms.png';
import LockIcon from '../assets/icons/lock.png';
import FacebookIcon from '../assets/icons/facebook.png';
import GoogleIcon from '../assets/icons/google.png';
import CellphoneIcon from '../assets/icons/cellphone.png';
import AppleIcon from '../assets/icons/apple.png';
import FacebookBigIcon from '../assets/icons/facebook-big.png';
import GoogleBigIcon from '../assets/icons/google-big.png';
import AppleBigIcon from '../assets/icons/apple-big.png';
import {platinum, blueberry} from '../assets/styles/const';
import {passwordRecovery, register} from '../util/const';

const LoginScreen = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {login, setErrorMessage, handleModalVisible, setModal} =
    useContext(AuthContext);
  const [isEmailClicked, setIsEmailClicked] = useState(false);
  const [isPasswordClicked, setIsPasswordClicked] = useState(false);

  const [state, setState] = useState({
    email: '',
    password: '',
    facebookLogin: false,
    googleLogin: false,
    appleLogin: false,
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
    setIsModalVisible(!isModalVisible);
  };

  const renderBrandModalLogin = () => {
    const loginOptions = [
      {
        name: 'facebook',
        icon: FacebookBigIcon,
        message: 'Conectando con Facebook...',
        active: state.facebookLogin,
      },
      {
        name: 'google',
        icon: GoogleBigIcon,
        message: 'Conectando con Google...',
        active: state.googleLogin,
      },
      {
        name: 'apple',
        icon: AppleBigIcon,
        message: 'Conectando con Apple...',
        active: state.appleLogin,
      },
    ];

    return loginOptions.map((option, index) => {
      if (option.active) {
        return (
          <View key={index}>
            <Text
              style={{
                fontFamily: 'Comfortaa-Bold',
              }}
              className="mt-8 text-black text-xl text-center">
              Ingresa <Text className="text-blueberry">easy</Text>
            </Text>
            <View className="mt-6 justify-center items-center">
              <Image source={option.icon} />
            </View>
            <View className="mt-6 mb-8 mx-3 ">
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                onPress={handleToggleModal}
                className="text-chineseblack text-lg text-center">
                {option.message}
              </Text>
            </View>
          </View>
        );
      }
      return null;
    });
  };

  return (
    <ScrollView className="w-full bg-white">
      <View className="flex justify-center items-center mt-14">
        <Animatable.View animation="fadeInUp">
          <Image source={require('../assets/images/logo.png')} />
        </Animatable.View>
      </View>
      <Animatable.View animation="fadeIn">
        <Text
          style={{
            fontFamily: 'Comfortaa-Bold',
          }}
          className="text-center text-3xl text-black my-10 leading-8">
          Iniciar sesión
        </Text>
        <View className="mx-3">
          <View
            className={`flex flex-row justify-center items-center appearance-none border rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline 
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
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              onFocus={() => setIsEmailClicked(true)}
              onBlur={() => setIsEmailClicked(false)}
              autoCapitalize="none"
              keyboardType="email-address"
              className="text-sm flex-1 ml-2 py-3 text-black"
              placeholder="Correo electronico"
              placeholderTextColor={platinum}
              onChangeText={value => handleChangeInput('email', value)}
            />
          </View>
          <View
            className={`mt-5 flex flex-row justify-center items-center appearance-none border rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline 
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
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              onFocus={() => setIsPasswordClicked(true)}
              onBlur={() => setIsPasswordClicked(false)}
              autoCorrect={false}
              secureTextEntry={true}
              className="text-sm flex-1 ml-3 py-3 text-black"
              placeholder="Contraseña"
              placeholderTextColor={platinum}
              onChangeText={value => handleChangeInput('password', value)}
            />
          </View>
          <View className="pt-6 pl-1">
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              onPress={() => navigation.navigate(passwordRecovery)}
              className="text-base text-blueberry">
              Recuperar contraseña
            </Text>
          </View>
          <TouchableHighlight
            className="bg-blueberry mt-10 py-4 rounded-full flex justify-center items-center"
            onPress={() => navigation.navigate(register)}>
            <Text
              style={{
                fontFamily: 'Manrope-Bold',
              }}
              className="text-xl text-white">
              Entrar
            </Text>
          </TouchableHighlight>
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
          <View className="flex flex-row justify-between items-center">
            <TouchableHighlight
              className="bg-white p-3 rounded-md flex justify-center items-center border-blueberry w-12 h-12"
              style={{
                borderWidth: 1,
              }}
              onPress={() => navigation.navigate(register)}>
              <IconImageComponent
                image={CellphoneIcon}
                color={blueberry}
                height={26}
                width={26}
              />
            </TouchableHighlight>
            <TouchableHighlight
              className="bg-white p-3 rounded-md flex justify-center items-center border-blueberry w-12 h-12"
              style={{
                borderWidth: 1,
              }}
              onPress={() => {
                setState({
                  facebookLogin: true,
                  googleLogin: false,
                  appleLogin: false,
                });
                handleToggleModal();
              }}>
              <IconImageComponent
                image={FacebookIcon}
                color={blueberry}
                height={25}
                width={13}
              />
            </TouchableHighlight>
            <TouchableHighlight
              className="bg-white p-3 rounded-md flex justify-center items-center border-blueberry w-12 h-12"
              style={{
                borderWidth: 1,
              }}
              onPress={() => {
                setState({
                  facebookLogin: false,
                  googleLogin: true,
                  appleLogin: false,
                });
                handleToggleModal();
              }}>
              <IconImageComponent
                image={GoogleIcon}
                color={blueberry}
                height={25}
                width={25}
              />
            </TouchableHighlight>
            <TouchableHighlight
              className="bg-white p-3 rounded-md flex justify-center items-center border-blueberry w-12 h-12"
              style={{
                borderWidth: 1,
              }}
              onPress={() => {
                setState({
                  facebookLogin: false,
                  googleLogin: false,
                  appleLogin: true,
                });
                handleToggleModal();
              }}>
              <IconImageComponent
                image={AppleIcon}
                color={blueberry}
                height={31}
                width={24}
              />
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            className="bg-white my-10 py-4 rounded-full flex justify-center items-center border-turquoise" style={{
              borderWidth: 1,
            }}
            onPress={() => navigation.navigate(register)}>
            <Text
              style={{
                fontFamily: 'Manrope-Bold',
              }}
              className="text-xl text-turquoise">
              Soy proveedor
            </Text>
          </TouchableHighlight>
        </View>
      </Animatable.View>
      <ModalComponent
        isVisible={isModalVisible}
        handleBackButtonPress={handleToggleModal}
        handleBackdropPress={handleToggleModal}>
        {renderBrandModalLogin()}
      </ModalComponent>
    </ScrollView>
  );
};

export default LoginScreen;

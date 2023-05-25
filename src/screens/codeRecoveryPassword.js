import React, {useState} from 'react';
import {Text, View, TextInput, TouchableHighlight} from 'react-native';
import IconImageComponent from '../components/iconImage';
import ModalComponent from '../components/modal';
import ArrowLeftIcon from '../assets/icons/arrow-left.png';
import {StackActions} from '@react-navigation/native';
import {platinum} from '../assets/styles/const';
import {newPassword, passwordRecovery} from '../util/const';

const popAction = StackActions.pop(1);

const CodeRecoveryPasswordScreen = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [codeState, setCodeState] = useState({
    codeOne: '',
    codeTwo: '',
    codeThree: '',
    codeFour: '',
    codeFive: '',
    codeSix: '',
  });
  const [isClickedCodeState, isClikedCodeState] = useState({
    codeOne: false,
    codeTwo: false,
    codeThree: false,
    codeFour: false,
    codeFive: false,
    codeSix: false,
  });

  const handlePhoneChange = (name, value) => {
    setCodeState({
      ...codeState,
      [name]: value,
    });
  };

  const handleFocusedCodeState = (name, value) => {
    isClikedCodeState({
      ...isClikedCodeState,
      [name]: value,
    });
  };

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View className="bg-white">
      <View className="mx-3">
        <View className="flex flex-row items-center mt-10">
          <TouchableHighlight
            onPress={() => {
              navigation.dispatch(popAction);
            }}
            className="rounded-xl p-1 w-12 h-12 shadow-2xl shadow-blueberry bg-white flex justify-center items-center">
            <IconImageComponent image={ArrowLeftIcon} height={40} width={40} />
          </TouchableHighlight>
          <Text
            style={{
              fontFamily: 'Comfortaa-Bold',
            }}
            className="text-xl text-black ml-5">
            Recuperar contraseña
          </Text>
        </View>
        <View>
          <View className="flex-row justify-between">
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              className="mt-12 text-base text-black">
              Ingresa el código enviado.
            </Text>
            <Text
              style={{
                fontFamily: 'Manrope-Bold',
              }}
              className="mt-12 text-base text-red">
              Código incorrecto
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="mt-4 text-platinum text-xs">
            Si no lo encuentras en tu bandeja principal, revisa en SPAM o en
            correos no deseados.
          </Text>
          <View className="mt-10 flex flex-row justify-center items-center">
            <View
              className={`flex justify-center items-center mr-1 w-12 h-12 appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline 
          ${
            isClickedCodeState.codeOne ? 'border-blueberry' : 'border-platinum'
          }`}>
              <TextInput
                maxLength={1}
                onFocus={() => handleFocusedCodeState('codeOne', true)}
                onBlur={() => handleFocusedCodeState('codeOne', false)}
                keyboardType="phone-pad"
                className="text-sm py-3 text-black "
                placeholder="___"
                placeholderTextColor={platinum}
                onChangeText={value => handlePhoneChange('codeOne', value)}
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
              />
            </View>
            <View
              className={`flex justify-center items-center mr-1 w-12 h-12 appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline 
          ${
            isClickedCodeState.codeTwo ? 'border-blueberry' : 'border-platinum'
          }`}>
              <TextInput
                maxLength={1}
                onFocus={() => handleFocusedCodeState('codeTwo', true)}
                onBlur={() => handleFocusedCodeState('codeTwo', false)}
                keyboardType="phone-pad"
                className="text-sm flex-1 py-3 text-black"
                placeholder="___"
                placeholderTextColor={platinum}
                onChangeText={value => handlePhoneChange('codeTwo', value)}
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
              />
            </View>
            <View
              className={`flex justify-center items-center mr-1 w-12 h-12 appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline 
          ${
            isClickedCodeState.codeThree
              ? 'border-blueberry'
              : 'border-platinum'
          }`}>
              <TextInput
                maxLength={1}
                onFocus={() => handleFocusedCodeState('codeThree', true)}
                onBlur={() => handleFocusedCodeState('codeThree', false)}
                keyboardType="phone-pad"
                className="text-sm flex-1 py-3 text-black"
                placeholder="___"
                placeholderTextColor={platinum}
                onChangeText={value => handlePhoneChange('codeThree', value)}
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
              />
            </View>
            <View
              className={`flex justify-center items-center mr-1 w-12 h-12 appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline 
          ${
            isClickedCodeState.codeFour ? 'border-blueberry' : 'border-platinum'
          }`}>
              <TextInput
                maxLength={1}
                onFocus={() => handleFocusedCodeState('codeFour', true)}
                onBlur={() => handleFocusedCodeState('codeFour', false)}
                keyboardType="phone-pad"
                className="text-sm flex-1 py-3 text-black"
                placeholder="___"
                placeholderTextColor={platinum}
                onChangeText={value => handlePhoneChange('codeFour', value)}
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
              />
            </View>
            <View
              className={`flex justify-center items-center mr-1 w-12 h-12 appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline 
          ${
            isClickedCodeState.codeFive ? 'border-blueberry' : 'border-platinum'
          }`}>
              <TextInput
                maxLength={1}
                onFocus={() => handleFocusedCodeState('codeFive', true)}
                onBlur={() => handleFocusedCodeState('codeFive', false)}
                keyboardType="phone-pad"
                className="text-sm flex-1 py-3 text-black"
                placeholder="___"
                placeholderTextColor={platinum}
                onChangeText={value => handlePhoneChange('codeFive', value)}
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
              />
            </View>
            <View
              className={`flex justify-center items-center w-12 h-12 appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline 
          ${
            isClickedCodeState.codeSix ? 'border-blueberry' : 'border-platinum'
          }`}>
              <TextInput
                maxLength={1}
                onFocus={() => handleFocusedCodeState('codeSix', true)}
                onBlur={() => handleFocusedCodeState('codeSix', false)}
                keyboardType="phone-pad"
                className="text-sm flex-1 py-3 text-black"
                placeholder="___"
                placeholderTextColor={platinum}
                onChangeText={value => handlePhoneChange('codeSix', value)}
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
              />
            </View>
          </View>
          <View className="my-10 flex flex-row justify-between">
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              onPress={handleToggleModal}
              className="text-base text-blueberry">
              Reenviar código
            </Text>
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              onPress={() => navigation.navigate('Register')}
              className="text-base text-blueberry">
              No recibo el código
            </Text>
          </View>
          <TouchableHighlight
            className="bg-blueberry py-4 rounded-full flex justify-center items-center"
            onPress={() => navigation.navigate(newPassword)}>
            <Text
              style={{
                fontFamily: 'Manrope-Bold',
              }}
              className="text-xl text-white">
              Verificar
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      <ModalComponent
        isVisible={isModalVisible}
        handleBackButtonPress={handleToggleModal}
        handleBackdropPress={handleToggleModal}>
        <View className="mx-3">
          <Text
            style={{
              fontFamily: 'Comfortaa-Bold',
            }}
            className="mt-8 text-black text-xl text-center">
            Código reenviado
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-platinum text-lg my-3 text-center">
            En breve recibiras un código al celular:
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="mb-10 text-blueberry text-xl text-center">
            +57 305 3424910
          </Text>
          <View className="mb-8 flex flex-row justify-between items-center">
            <Text
              onPress={() => {
                handleToggleModal();
                navigation.navigate(passwordRecovery);
              }}
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              className="text-platinum text-lg">
              Cambiar celular
            </Text>
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              onPress={handleToggleModal}
              className="text-blueberry text-lg">
              Aceptar
            </Text>
          </View>
        </View>
      </ModalComponent>
    </View>
  );
};

export default CodeRecoveryPasswordScreen;

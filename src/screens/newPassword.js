import React, {useState} from 'react';
import {Text, View, TextInput, TouchableHighlight} from 'react-native';
import IconImageComponent from '../components/iconImage';
import ModalComponent from '../components/modal';
import LockIcon from '../assets/icons/lock.png';
import ArrowLeftIcon from '../assets/icons/arrow-left.png';
import {StackActions} from '@react-navigation/native';
import {blueberry, platinum} from '../assets/styles/const';

const popAction = StackActions.pop(1);

const NewPasswordScreen = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordClicked, setIsPasswordClicked] = useState(false);
  const [isConfirmPasswordClicked, setIsConfirmPasswordClicked] =
    useState(false);

  const handlePasswordChange = value => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = value => {
    setConfirmPassword(value);
  };

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  //TODO: handle logic

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
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="mt-12 mb-10 text-base text-black">
            Ingresa tu nueva contraseña
          </Text>
          <View
            className={`flex flex-row justify-center items-center appearance-none border rounded-md w-full leading-tight focus:outline-none focus:shadow-outline 
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
              onChangeText={value => handlePasswordChange(value)}
              style={{
                fontFamily: 'Manrope-Regular',
              }}
            />
          </View>
          <View
            className={`mt-5 mb-10 flex flex-row justify-center items-center appearance-none border rounded-md w-full leading-tight focus:outline-none focus:shadow-outline 
          ${
            isConfirmPasswordClicked ? 'border-blueberry' : 'border-platinum'
          }`}>
            <View className="pl-4">
              <IconImageComponent
                image={LockIcon}
                color={isConfirmPasswordClicked ? blueberry : platinum}
                height={19}
                width={19}
              />
            </View>
            <TextInput
              onFocus={() => setIsConfirmPasswordClicked(true)}
              onBlur={() => setIsConfirmPasswordClicked(false)}
              autoCorrect={false}
              secureTextEntry={true}
              className="text-sm flex-1 ml-3 py-3 text-black"
              placeholder="Confirmar contraseña"
              placeholderTextColor={platinum}
              onChangeText={value => handleConfirmPasswordChange(value)}
              style={{
                fontFamily: 'Manrope-Regular',
              }}
            />
          </View>
          <TouchableHighlight
            className="bg-blueberry py-4 rounded-full flex justify-center items-center"
            onPress={handleToggleModal}>
            <Text
              style={{
                fontFamily: 'Manrope-Bold',
              }}
              className="text-xl text-white">
              Guardar y continuar
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      <ModalComponent
        isVisible={isModalVisible}
        handleBackButtonPress={handleToggleModal}
        handleBackdropPress={handleToggleModal}>
        <Text
          style={{
            fontFamily: 'Comfortaa-Bold',
          }}
          className="mt-8 text-black text-xl text-center">
          Fue muy <Text className="text-blueberry">easy</Text>
        </Text>
        <Text
          style={{
            fontFamily: 'Manrope-Regular',
          }}
          className="text-black text-lg my-3 text-center">
          Contraseña guardada con éxito
        </Text>
        <Text
          style={{
            fontFamily: 'Manrope-Regular',
          }}
          onPress={handleToggleModal}
          className="text-blueberry text-lg text-center my-8">
          Aceptar
        </Text>
      </ModalComponent>
    </View>
  );
};

export default NewPasswordScreen;

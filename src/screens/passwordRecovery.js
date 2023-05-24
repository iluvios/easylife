import React, {useState} from 'react';
import {Text, View, TextInput, TouchableHighlight} from 'react-native';
import IconImageComponent from '../components/iconImage';
import PhoneIcon from '../assets/icons/phone.png';
import EmailIcon from '../assets/icons/arroa.png';
import ArrowLeftIcon from '../assets/icons/arrow-left.png';
import {StackActions} from '@react-navigation/native';
import {blueberry, platinum} from '../assets/styles/const';
import {passwordCode} from '../util/const';

const popAction = StackActions.pop(1);

const PasswordRecoveryScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isPhoneClicked, setIsPhoneClicked] = useState(false);
  const [isEmailClicked, setIsEmailClicked] = useState(false);
  const [isRecoveryWithPhone, setRecoveryWithPhone] = useState(false);

  const handlePhoneChange = value => {
    setPhone(value);
  };

  const handleToggleRecoveryWithPhone = () => {
    setRecoveryWithPhone(!isRecoveryWithPhone);
    setIsPhoneClicked(true);
    setIsEmailClicked(true);
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
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="mt-12 mb-8 text-base text-black">
            El proceso es muy <Text className="text-blueberry">easy</Text>
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-chineseblack text-base mb-1">
            1. Ingresa tu número de celular.
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-chineseblack text-base">
            2. Te enviamos un código via{' '}
            <Text
              style={{
                fontFamily: 'Manrope-Bold',
              }}
              className="text-green">
              Whatsapp
            </Text>
            .
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-chineseblack text-xs ml-5 mb-1">
            No lo compartas con nadie
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-chineseblack text-base">
            3. Lo ingresas y escribes tu nueva contraseña.
          </Text>

          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            onPress={handleToggleRecoveryWithPhone}
            className="mt-10 text-base text-blueberry">
            {isRecoveryWithPhone
              ? 'Recuperar con número de celular'
              : 'Recuperar con correo electronico'}
          </Text>

          {isRecoveryWithPhone ? (
            <View
              className={`my-10 flex flex-row justify-center items-center appearance-none border rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline 
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
                keyboardType="email-address"
                className="text-sm flex-1 ml-2 py-3 text-black"
                placeholder="Correo electrónico"
                placeholderTextColor={platinum}
                onChangeText={value => handlePhoneChange(value)}
              />
            </View>
          ) : (
            <View
              className={`my-10 flex flex-row justify-center items-center appearance-none border rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline 
          ${isPhoneClicked ? 'border-blueberry' : 'border-platinum'}`}>
              <View className="pl-4">
                <IconImageComponent
                  image={PhoneIcon}
                  color={isPhoneClicked ? blueberry : platinum}
                  height={19}
                  width={19}
                />
              </View>
              <TextInput
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                onFocus={() => setIsPhoneClicked(true)}
                onBlur={() => setIsPhoneClicked(false)}
                keyboardType="phone-pad"
                className="text-sm flex-1 ml-2 py-3 text-black"
                placeholder="Celular"
                placeholderTextColor={platinum}
                onChangeText={value => handlePhoneChange(value)}
              />
            </View>
          )}

          <TouchableHighlight
            className="bg-blueberry py-4 rounded-full flex justify-center items-center"
            onPress={() => navigation.navigate(passwordCode)}>
            <Text
              style={{
                fontFamily: 'Manrope-Bold',
              }}
              className="text-xl text-white">
              Iniciar
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default PasswordRecoveryScreen;

import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  ImageBackground,
} from 'react-native';
import IconImageComponent from '../components/iconImage';
import ArrowLeftIcon from '../assets/icons/arrow-left.png';
import MessageIcon from '../assets/icons/message.png';
import BGStreet from '../assets/images/bg-street.png';
import PhoneWhiteImage from '../assets/images/phone-white.png';
import WhatsappWhiteImage from '../assets/images/whatsapp-white.png';
import LogoGreen from '../assets/images/logo-green.png';
import DotsBlue from '../assets/images/dots-blue.png';
import LineGreen from '../assets/images/line-green.png';
import NotchImage from '../assets/images/notch.png';
import {StackActions} from '@react-navigation/native';
import {support, rateService, faqsStack} from '../util/const';

const popAction = StackActions.pop(1);

const ArriveMapScreen = ({navigation}) => {
  const [isPanelVisible, setIsPanelVisible] = useState(true);
  const handleToggleModal = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  return (
    <View className="bg-white h-full">
      <ImageBackground source={BGStreet} resizeMode="cover" className="h-full">
        <View className="mx-3">
          <View className="flex flex-row justify-between items-center mt-10">
            <TouchableHighlight
              onPress={() => {
                navigation.dispatch(popAction);
              }}
              className="rounded-xl p-1 w-12 h-12 shadow-2xl shadow-blueberry bg-white flex justify-center items-center">
              <IconImageComponent
                image={ArrowLeftIcon}
                height={40}
                width={40}
              />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                navigation.navigate(faqsStack, {screen: support});
              }}
              className="rounded-xl p-1 w-12 h-12 shadow-2xl shadow-blueberry bg-white flex justify-center items-center">
              <IconImageComponent image={MessageIcon} height={35} width={35} />
            </TouchableHighlight>
          </View>
          <View className="mt-5">
            <View className="mx-6 bg-white rounded-3xl justify-center items-center z-10">
              <Text
                style={{
                  fontFamily: 'Comfortaa-Bold',
                }}
                className="my-7 text-blueberry text-3xl">
                easy llegó
              </Text>
            </View>
            <View className="absolute mt-28 right-20">
              <Image source={LogoGreen} />
            </View>
            <View className="absolute mt-24 left-16 ml-2 pt-2">
              <Image source={DotsBlue} />
            </View>
            <View className="absolute mt-40 -right-4">
              <Image source={LineGreen} />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          width: '100%',
          flex: 1,
          position: 'absolute',
          bottom: 0,
        }}>
        <View className="bg-white min-h-fit rounded-tr-3xl rounded-tl-3xl">
          <View className="ml-3">
            <View className="mt-5 flex justify-center items-center">
              <TouchableHighlight onPress={handleToggleModal}>
                <Image source={NotchImage} />
              </TouchableHighlight>
            </View>
            {/*Buscando */}
            <View className="mt-5">
              {isPanelVisible && (
                <View>
                  <Text
                    style={{
                      fontFamily: 'Manrope-Bold',
                    }}
                    className="mt-5 text-chineseblack text-xl">
                    easy se encuantra en la ubicación
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Manrope-Regular',
                    }}
                    className="text-platinum text-xl mt-5">
                    El servicio se cancela en 4:53 min
                  </Text>
                  <View className="flex-row justify-center items-center my-5">
                    <TouchableHighlight
                      onPress={() => {
                        navigation.navigate(rateService);
                      }}
                      className="ml-4 justify-center items-center bg-blueberry rounded-full"
                      style={{
                        width: 48,
                        height: 50,
                      }}>
                      <Image source={PhoneWhiteImage} />
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => {
                        navigation.navigate(rateService);
                      }}
                      className="ml-4 justify-center items-center bg-green rounded-full"
                      style={{
                        width: 48,
                        height: 50,
                      }}>
                      <Image source={WhatsappWhiteImage} />
                    </TouchableHighlight>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ArriveMapScreen;

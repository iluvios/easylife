import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  ImageBackground,
} from 'react-native';
import ModalComponent from '../components/modal';
import IconImageComponent from '../components/iconImage';
import ArrowLeftIcon from '../assets/icons/arrow-left.png';
import MessageIcon from '../assets/icons/message.png';
import MoneyIcon from '../assets/icons/money-small.png';
import LineWhite from '../assets/images/line-white.png';
import LocationBlue from '../assets/images/location-blue.png';
import LogoWhite from '../assets/images/logo-white.png';
import BGStreet from '../assets/images/bg-street.png';
import AvatarSmallImage from '../assets/images/avatar-small.png';
import StarYellowSmallImage from '../assets/images/star-yellow-small.png';
import PhoneWhiteImage from '../assets/images/phone-white.png';
import WhatsappWhiteImage from '../assets/images/whatsapp-white.png';
import LogoGreen from '../assets/images/logo-green.png';
import DotsBlue from '../assets/images/dots-blue.png';
import LineGreen from '../assets/images/line-green.png';
import NotchImage from '../assets/images/notch.png';
import {StackActions} from '@react-navigation/native';
import {
  support,
  arriveMap,
  rateProfile,
  canceledService,
  faqsStack,
} from '../util/const';
import {platinum, blueberry} from '../assets/styles/const';

const popAction = StackActions.pop(1);

const OnTheWayMapScreen = ({navigation}) => {
  const [isPanelVisible, setIsPanelVisible] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleTogglePanel = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
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
                easy en camino
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
      <Animatable.View
        animation="slideInUp"
        style={{
          width: '100%',
          flex: 1,
          position: 'absolute',
          bottom: 0,
        }}>
        <View className="bg-white min-h-fit rounded-tr-3xl rounded-tl-3xl">
          <View className="ml-3">
            <View className="mt-5 flex justify-center items-center">
              <TouchableHighlight onPress={handleTogglePanel}>
                <Image source={NotchImage} />
              </TouchableHighlight>
            </View>
            {/*Buscando */}
            <View className="mt-5">
              {isPanelVisible && (
                <View>
                  <Animatable.View
                    className="flex flex-row justify-around"
                    animation="fadeInUp">
                    <View className="flex flex-row">
                      <View className="bg-blueberry rounded-xl w-10 h-10 justify-center items-center">
                        <Image
                          source={LogoWhite}
                          style={{
                            width: 18,
                            height: 23,
                          }}
                        />
                      </View>
                      <View className="ml-3 justify-center items-center">
                        <Image
                          source={LineWhite}
                          style={{
                            width: 101,
                            height: 5,
                            tintColor: blueberry,
                            borderRadius: 10,
                          }}
                        />
                      </View>
                    </View>
                    <View className="flex-row justify-center items-center">
                      <Text
                        style={{
                          fontFamily: 'Manrope-Regular',
                        }}
                        className="mr-3 text-blueberry text-xs">
                        5 min
                      </Text>
                      <Image source={LocationBlue} />
                    </View>
                  </Animatable.View>
                  <Text
                    style={{
                      fontFamily: 'Manrope-Regular',
                    }}
                    className="text-platinum text-xl mt-5">
                    Detalles del servicio
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Manrope-Bold',
                    }}
                    className="mt-5 text-chineseblack text-xl">
                    Conductor elegido
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Manrope-Regular',
                    }}
                    className="text-platinum text-lg mt-3">
                    Precio
                  </Text>
                  <Animatable.View
                    className="flex-row justify-between mt-3"
                    animation="fadeInUp">
                    <Text
                      style={{
                        fontFamily: 'Manrope-Bold',
                      }}
                      className="text-chineseblack text-lg">
                      $ 120.000 cop
                    </Text>
                    <View className="mr-3 flex-row justify-center items-center">
                      <IconImageComponent
                        image={MoneyIcon}
                        width={24}
                        height={24}
                        color={platinum}
                      />
                      <Text
                        style={{
                          fontFamily: 'Manrope-Regular',
                        }}
                        className="ml-1 text-platinum text-lg">
                        Efectivo
                      </Text>
                    </View>
                  </Animatable.View>
                  <Text
                    style={{
                      fontFamily: 'Manrope-Regular',
                    }}
                    className="text-platinum text-lg mt-3">
                    Conductor
                  </Text>
                  <Animatable.View
                    className="flex-row items-center mt-3"
                    animation="fadeInUp">
                    <Image source={AvatarSmallImage} />
                    <Text
                      style={{
                        fontFamily: 'Manrope-Bold',
                      }}
                      className="ml-3 text-chineseblack text-xl">
                      Juan R.
                    </Text>
                    <Text className="ml-3 text-platinum text-lg">4.5</Text>
                    <View className="ml-3">
                      <Image source={StarYellowSmallImage} />
                    </View>
                    <Text
                      style={{
                        fontFamily: 'Manrope-Regular',
                      }}
                      onPress={() => {
                        navigation.navigate(rateProfile);
                      }}
                      className="ml-2 text-blueberry text-lg ">
                      Profile
                    </Text>
                    <TouchableHighlight
                      onPress={() => navigation.navigate(arriveMap)}
                      className="ml-2 justify-center items-center bg-blueberry rounded-full"
                      style={{
                        width: 48,
                        height: 50,
                      }}>
                      <Image source={PhoneWhiteImage} />
                    </TouchableHighlight>
                    <View
                      className="ml-1 justify-center items-center bg-green rounded-full"
                      style={{
                        width: 48,
                        height: 50,
                      }}>
                      <Image source={WhatsappWhiteImage} />
                    </View>
                  </Animatable.View>
                  <Text
                    style={{
                      fontFamily: 'Manrope-Bold',
                    }}
                    onPress={() => {
                      handleToggleModal();
                    }}
                    className="text-platinum text-2xl text-center mt-10 mb-7">
                    Cancelar servicio
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </Animatable.View>
      <ModalComponent
        isVisible={isModalVisible}
        handleBackButtonPress={handleToggleModal}
        handleBackdropPress={handleToggleModal}>
        <View className="mx-3">
          <Text
            style={{
              fontFamily: 'Comfortaa-Bold',
            }}
            className="mt-8 text-red text-xl text-center">
            Cancelar servicio?
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="mt-5 text-chineseblack text-xl text-center">
            Piénsalo una vez más, al cancelar el servico tu ranking de confianza
            baja, tus próximos servicios no serán prioritarios para los easys.
          </Text>
          <View className="my-10 mx-3  flex-row justify-between">
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              onPress={() => {
                handleToggleModal();
                navigation.navigate(canceledService);
              }}
              className="text-platinum text-xl">
              Si, cancelar
            </Text>
            <Text
              style={{
                fontFamily: 'Manrope-Bold',
              }}
              onPress={handleToggleModal}
              className="text-blueberry text-xl">
              No, continuar
            </Text>
          </View>
        </View>
      </ModalComponent>
    </View>
  );
};

export default OnTheWayMapScreen;

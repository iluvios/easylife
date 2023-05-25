import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconImageComponent from '../components/iconImage';
import ArrowLeftIcon from '../assets/icons/arrow-left.png';
import MessageIcon from '../assets/icons/message.png';
import MoneyIcon from '../assets/icons/money-small.png';
import LogoWhiteImage from '../assets/images/logo-white.png';
import BGMap from '../assets/images/bg-map.png';
import PointMap from '../assets/images/point-map.png';
import NotchImage from '../assets/images/notch.png';
import {StackActions} from '@react-navigation/native';
import {support, onTheWayMap, faqsStack} from '../util/const';
import {platinum} from '../assets/styles/const';

const popAction = StackActions.pop(1);

const SearchMapScreen = ({navigation}) => {
  const [isPanelVisible, setIsPanelVisible] = useState(true);
  const handleToggleModal = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  return (
    <View className="bg-white h-full">
      <ImageBackground source={BGMap} resizeMode="cover" className="h-full">
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
                Buscando easys
              </Text>
            </View>
            <View className="absolute mt-7 -right-4 z-0">
              <Image source={PointMap} />
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
                      fontFamily: 'Manrope-Regular',
                    }}
                    className="text-platinum text-xl">
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
                  <View className="flex-row justify-between mt-3">
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
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Manrope-Regular',
                    }}
                    className="text-platinum text-lg mt-3">
                    Conductor
                  </Text>
                  <View className="flex-row mt-3">
                    <LinearGradient
                      className="rounded-full w-8 h-8 justify-center items-center"
                      colors={['#0099FF', '#2A69EB']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}>
                      <Image
                        source={LogoWhiteImage}
                        style={{
                          width: 16,
                          height: 20,
                        }}
                      />
                    </LinearGradient>
                    <Text
                      style={{
                        fontFamily: 'Manrope-Bold',
                      }}
                      className="ml-3 text-chineseblack text-xl">
                      Buscando...
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Manrope-Bold',
                    }}
                    onPress={() => navigation.navigate(onTheWayMap)}
                    className="text-platinum text-2xl text-center mt-10 mb-7">
                    Cancelar servicio
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchMapScreen;

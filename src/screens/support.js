import React from 'react';
import {Text, View, TouchableHighlight, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconImageComponent from '../components/iconImage';
import ArrowLeftIcon from '../assets/icons/arrow-left.png';
import BGStreet from '../assets/images/bg-street.png';
import HeartCircle from '../assets/images/heart-circle.png';
import WhatsappBlue from '../assets/icons/whatsapp-blue.png';
import MessageBlue from '../assets/icons/message-blue.png';
import SendBlue from '../assets/icons/send-blue.png';
import {dashboardStack, faqs} from '../util/const';

const elements = [
  {
    id: 1,
    iconImage: WhatsappBlue,
    title: 'Chat en Whatsapp',
    nav: 1,
  },
  {
    id: 2,
    iconImage: MessageBlue,
    title: 'FAQs',
    nav: faqs,
  },
  {
    id: 3,
    iconImage: SendBlue,
    title: 'Un correo mejor?',
    nav: 1,
  },
];

const SupportScreen = ({navigation}) => {
  const renderTextDescription = id => {
    switch (id) {
      case 1:
        return (
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-platinum text-base">
            Cuéntanoslo y lo solucionamos, así de{' '}
            <Text className="text-blueberry">easy</Text>.
          </Text>
        );
      case 2:
        return (
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
              maxWidth: 270,
            }}
            className="text-platinum text-base">
            Encuentra respuestas inteligentes muy{' '}
            <Text className="text-blueberry">easy</Text>.
          </Text>
        );
      case 3:
        return (
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
              maxWidth: 270,
            }}
            className="text-platinum text-base">
            Obtén una solución <Text className="text-blueberry">easy</Text> a tu
            bandeja de entrada.
          </Text>
        );
      default:
        null;
    }
  };
  const renderService = ({id, iconImage, title, nav}) => {
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate(nav)}
        key={id}
        className="bg-white rounded-3xl mb-5 flex-col py-2 px-3 shadow-md shadow-black">
        <View className="flex-row items-center">
          <View>
            <Image source={iconImage} />
          </View>
          <View className="flex-col ml-5">
            <Text
              style={{
                fontFamily: 'Manrope-Bold',
              }}
              className="text-chineseblack text-xl">
              {title}
            </Text>
            <View
              style={{
                maxWidth: 270,
              }}>
              {renderTextDescription(id)}
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <LinearGradient
      className="w-full h-full"
      colors={['#0099FF', '#2A69EB']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <View source={BGStreet} resizeMode="cover" className="h-full">
        <View className="mx-3">
          <View className="flex flex-row justify-start items-center mt-10">
            <TouchableHighlight
              onPress={() => {
                navigation.navigate(dashboardStack);
              }}
              className="rounded-xl p-1 w-12 h-12 shadow-2xl shadow-blueberry bg-white flex justify-center items-center">
              <IconImageComponent
                image={ArrowLeftIcon}
                height={40}
                width={40}
              />
            </TouchableHighlight>
            <Text
              style={{
                fontFamily: 'Comfortaa-Bold',
              }}
              className="ml-4 text-white text-3xl">
              Necesitas ayuda?
            </Text>
          </View>
          <View className="justify-center items-center mt-12">
            <Image source={HeartCircle} />
            <Text
              style={{
                fontFamily: 'Comfortaa-Bold',
              }}
              className="mt-1 text-white text-xl">
              24/7
            </Text>
            <Text
              style={{
                fontFamily: 'Comfortaa-Bold',
              }}
              className="mt-1 text-white text-3xl">
              Centro de ayuda
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          width: '100%',
          height: '48%',
          flex: 1,
          position: 'absolute',
          bottom: 0,
        }}>
        <View className="bg-white min-h-fit rounded-tr-3xl rounded-tl-3xl">
          <View className="mx-3">
            <View>
              <Text
                style={{
                  fontFamily: 'Manrope-Bold',
                }}
                className="mt-8 text-chineseblack text-xl">
                Dinos como podemos ayudarte
              </Text>
              <View className="mt-10">
                {elements.map(el => renderService(el))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SupportScreen;

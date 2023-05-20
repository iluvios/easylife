import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableHighlight} from 'react-native';
import {StackActions} from '@react-navigation/native';
import ModalComponent from '../components/modal';
import AvatarImage from '../assets/images/avatar.png';
import LogoBlue from '../assets/images/logo-blue.png';
import MessageSmallIcon from '../assets/icons/message-small.png';
import EmojiSadImage from '../assets/images/emoji-sad.png';
import EmojiGoodImage from '../assets/images/emoji-good.png';
import StarYellow from '../assets/images/star-yellow.png';
import StarWhite from '../assets/images/star-white.png';
import {platinum} from '../assets/styles/const';

const popAction = StackActions.pop(1);

const RateScreen = ({navigation}) => {
  const [comment, setComment] = useState('');
  const [commentClicked, setCommentClicked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View className="bg-white h-full w-full">
      <Text className="text-chineseblack text-3xl font bold mt-12 text-center">
        Califica el servicio
      </Text>
      <View className="mt-14 flex justify-center items-center">
        <Image source={AvatarImage} />
      </View>
      <Text className="mt-5 text-chineseblack text-lg font-bold text-center">
        Juan Pablo Ramirez
      </Text>
      <Text className="mt-16 text-chineseblack text-lg text-center">
        ¿Cómo fue el servicio recibido?
      </Text>
      <View className="ml-3">
        <View className="mt-10 flex-row">
          <View className="mr-3">
            <Image source={EmojiSadImage} />
          </View>
          <View className="mr-4">
            <Image source={StarYellow} />
          </View>
          <View className="mr-4">
            <Image source={StarYellow} />
          </View>
          <View className="mr-4">
            <Image source={StarYellow} />
          </View>
          <View className="mr-4">
            <Image source={StarWhite} />
          </View>
          <Image source={StarWhite} />
          <View className="ml-3">
            <Image source={EmojiGoodImage} />
          </View>
        </View>
        <View
          className={`mt-10 flex flex-row justify-center items-start shadow appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline h-20 mr-3 ${
            commentClicked ? 'border-blueberry' : 'border-platinum'
          }`}>
          <View className="flex-row justify-center items-center">
            <View className="ml-3">
              <Image source={MessageSmallIcon} />
            </View>
            <TextInput
              onFocus={() => setCommentClicked(true)}
              onBlur={() => setCommentClicked(false)}
              keyboardType="ascii-capable"
              multiline={true}
              className="text-xl flex-1 ml-2 py-3 text-black"
              placeholder="Comentario"
              placeholderTextColor={platinum}
              onChangeText={value => setComment(value)}
              style={{
                fontFamily: 'Comfortaa',
              }}
            />
          </View>
        </View>
      </View>
      <View className="flex-row absolute bottom-10 ml-3">
        <TouchableHighlight
          className="bg-platinum w-44 py-4 rounded-full flex justify-center items-center mr-3"
          onPress={() => {
            navigation.dispatch(popAction);
          }}>
          <Text className="text-xl font-bold text-white">Omitir</Text>
        </TouchableHighlight>
        <TouchableHighlight
          className="bg-blueberry w-44 py-4 rounded-full flex justify-center items-center"
          onPress={() => {
            handleToggleModal();
          }}>
          <Text className="text-xl font-bold text-white">Enviar</Text>
        </TouchableHighlight>
      </View>
      <ModalComponent
        isVisible={isModalVisible}
        handleBackButtonPress={() => {
          navigation.dispatch(popAction);
        }}
        handleBackdropPress={() => {
          navigation.dispatch(popAction);
        }}>
        <View className="mt-7 justify-center items-center">
          <Image
            source={LogoBlue}
            style={{
              width: 48,
              height: 60,
            }}
          />
        </View>
        <Text className="mt-8 text-black text-xl text-center font-bold">
          Muchas gracias!
        </Text>
        <Text className="text-chineseblack text-lg my-7 text-center mx-3">
          Tus opiniones son lo más importante para nosotros.{' '}
          <Text className="text-blueberry">
            Gracias por ayudarnos a mejorar.
          </Text>
        </Text>
        <Text
          onPress={() => {
            handleToggleModal();
            navigation.dispatch(popAction);
          }}
          className="text-blueberry text-xl mb-7 text-center">
          Continuar
        </Text>
      </ModalComponent>
    </View>
  );
};

export default RateScreen;

import React from 'react';
import {Text, View, ScrollView, TouchableHighlight, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconImageComponent from '../components/iconImage';
import LogoWhite from '../assets/images/logo-white.png';
import AvatarImage from '../assets/images/avatar.png';
import StarYellowSmallImage from '../assets/images/star-yellow-small.png';
import ArrowLeftIcon from '../assets/icons/arrow-left.png';
import {StackActions} from '@react-navigation/native';
import {formateDate} from '../util/const';

const popAction = StackActions.pop(1);

const comments = [
  {
    id: 1,
    userName: 'Esther',
    stars: 3,
    comment: 'Repellendus aut odit quia excepturi quia voluptatum accusamus.',
    date: new Date(),
  },
  {
    id: 2,
    userName: 'Dante',
    stars: 5,
    comment: 'Ut repellat fugit fuga omnis iusto et.',
    date: new Date(),
  },
  {
    id: 3,
    userName: 'Rachael',
    stars: 4,
    comment: 'Fugiat minima ut alias error labore iste et.',
    date: new Date(),
  },
  {
    id: 4,
    userName: 'Mario',
    stars: 2,
    comment: 'Mollitia ullam voluptatum enim non laborum.',
    date: new Date(),
  },
];

const RateProfileScreen = ({navigation}) => {
  function renderStarImages(count) {
    const imagenes = [];

    for (let i = 0; i < count; i++) {
      imagenes.push(
        <View className="mr-1" key={i}>
          <Image source={StarYellowSmallImage} />
        </View>,
      );
    }

    return imagenes;
  }

  const renderComment = ({id, userName, stars, comment, date}) => {
    return (
      <View
        key={id}
        className="bg-white rounded-3xl mb-5 mx-4 flex-row py-3 px-3 shadow-md shadow-black items-center">
        <LinearGradient
          className="rounded-full w-12 h-12 justify-center items-center"
          colors={['#0099FF', '#2A69EB']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Image
            source={LogoWhite}
            style={{
              width: 26,
              height: 33,
            }}
          />
        </LinearGradient>
        <View className="ml-5 w-full">
          <View
            className="flex-row justify-between"
            style={{
              maxWidth: 260,
            }}>
            <View className="flex-row justify-center items-center">
              <Text
                style={{
                  fontFamily: 'Manrope-Bold',
                }}
                className="mr-3 text-chineseblack text-xl">
                {userName.substring(0, 7)}
              </Text>
              {renderStarImages(stars)}
            </View>
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              className="text-platinum text-base">
              {formateDate(date)}
            </Text>
          </View>
          <Text
            className="text-platinum text-base"
            style={{
              maxWidth: 270,
              fontFamily: 'Manrope-Regular',
            }}>
            {comment}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View className="bg-white h-full">
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
            className="text-3xl text-chineseblack ml-5">
            Perfil
          </Text>
        </View>
        <View className="mt-10 flex justify-center items-center">
          <Image source={AvatarImage} />
        </View>
        <Text
          style={{
            fontFamily: 'Manrope-Bold',
          }}
          className="mt-5 text-chineseblack text-lg text-center">
          Juan Pablo Ramirez
        </Text>
        <View className="justify-center items-center flex-row mt-5">
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-platinum text-lg mr-1">
            4.5
          </Text>
          <Image source={StarYellowSmallImage} />
        </View>
      </View>
      <ScrollView className="mt-10">
        {comments.map(comment => renderComment(comment))}
      </ScrollView>
    </View>
  );
};

export default RateProfileScreen;

import React from 'react';
import {View, TouchableHighlight, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {service} from '../util/const';

const CardWithIcon = ({image, title, isLast, isReducedSize}) => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      onPress={() => navigation.navigate(service)}
      className={`shadow-xl shadow-platinum bg-white rounded-2xl flex justify-center items-center mb-5 ${
        isLast ? '' : 'mr-5'
      }`}
      style={{
        height: 113,
        width: isReducedSize ? 123 : 123,
      }}>
      <View className="flex-col justify-center items-center">
        <View className="mt-2">
          <Image source={image} />
        </View>
        <Text className="mb-2 text-blueberry text-base">{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default CardWithIcon;

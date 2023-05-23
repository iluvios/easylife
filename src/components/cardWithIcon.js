import React from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import IconImageComponent from '../components/iconImage';
import {useNavigation} from '@react-navigation/native';

const CardWithIcon = ({image, title, isLast, navigate}) => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      onPress={() => navigation.navigate(navigate)}
      className={`shadow-xl shadow-platinum bg-white rounded-2xl flex justify-center items-center mb-5 ${
        isLast ? '' : 'mr-5'
      }`}
      style={{
        height: 113,
        width: 123,
      }}>
      <View className="flex-col justify-center items-center">
        <View className="mt-2">
          <IconImageComponent image={image} height={60} width={60} />
        </View>
        <Text className="mb-2 text-blueberry text-base">{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default CardWithIcon;

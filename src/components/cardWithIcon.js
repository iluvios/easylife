import React from 'react';
import {View, Text, Image} from 'react-native';

const CardWithIcon = ({image, title, isLast}) => {
  return (
    <View
      className={`shadow-xl shadow-platinum bg-white rounded-2xl flex justify-center items-center mb-5 ${
        isLast ? '' : 'mr-5'
      }`}
      style={{height: 123, width: 123}}>
      <View className="flex-col justify-center items-center">
        <View className="mt-2">
          <Image source={image} />
        </View>
        <Text className="mb-2 text-blueberry text-base">{title}</Text>
      </View>
    </View>
  );
};

export default CardWithIcon;

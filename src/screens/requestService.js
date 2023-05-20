import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import LogoImage from '../assets/images/logo.png';
import {searchMap} from '../util/const';

const RequestServiceScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(searchMap);
    }, 3000);
  }, [navigation]);

  return (
    <View className="w-full h-full bg-blueberry flex justify-center items-center">
      <View className="w-24 h-24 rounded-3xl bg-white justify-center items-center">
        <Image
          source={LogoImage}
          style={{
            width: 63,
            height: 80,
          }}
        />
      </View>
      <Text className="text-white text-xl absolute bottom-20">
        Creando orden..
      </Text>
    </View>
  );
};

export default RequestServiceScreen;

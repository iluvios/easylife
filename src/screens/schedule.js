import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import LogoImage from '../assets/images/logo.png';
import {services} from '../util/const';

const ScheduleScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(services);
    }, 3000);
  }, [navigation]);

  return (
    <View className="w-full h-full bg-skyblue flex justify-center items-center">
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
        Abriendo formulario...
      </Text>
    </View>
  );
};

export default ScheduleScreen;

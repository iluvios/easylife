import React from 'react';
import {Image, View} from 'react-native';
import LogoBlue from '../assets/images/logo-blue.png';

const LoadingComponent = () => {
  return (
    <View className="bg-white w-full h-full flex justify-center items-center">
      <Image
        source={LogoBlue}
        style={{
          width: 80,
          height: 100,
        }}
      />
    </View>
  );
};

export default LoadingComponent;

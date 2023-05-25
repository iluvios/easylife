import React, {useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {View, Text, Image} from 'react-native';
import LogoImage from '../assets/animation/logo.png';
import CerrajeroImage from '../assets/animation/cerrajero.png';
import PasearImage from '../assets/animation/pasear.png';
import PlomeroImage from '../assets/animation/plomero.png';
import {walkthrough} from '../util/const';

const LoadingScreen = ({navigation}) => {
  const [currentLogo, setCurrentLogo] = useState(LogoImage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo(prevLogo => {
        switch (prevLogo) {
          case LogoImage:
            return CerrajeroImage;
          case CerrajeroImage:
            return PasearImage;
          case PasearImage:
            return PlomeroImage;
          case PlomeroImage:
            return LogoImage;
          default:
            return LogoImage;
        }
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(walkthrough);
    }, 3000);
  }, [navigation]);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Animatable.View
        animation="rotate"
        duration={650}
        easing="ease-in-expo"
        iterationCount="infinite">
        <View className="w-24 h-24 rounded-3xl bg-white justify-center items-center shadow-2xl shadow-blueberry" />
      </Animatable.View>
      <View className="absolute">
        <Image source={currentLogo} />
      </View>
      <Text
        style={{
          fontFamily: 'Comfortaa-Bold',
        }}
        className="text-platinum text-xl absolute bottom-20 text-center mx-3">
        Estamos preparando todo para ti
      </Text>
    </View>
  );
};

export default LoadingScreen;

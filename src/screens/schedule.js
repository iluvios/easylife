import React, {useState, useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import {View, Text, Image} from 'react-native';
import LogoImage from '../assets/animation/logo.png';
import CerrajeroImage from '../assets/animation/cerrajero.png';
import PasearImage from '../assets/animation/pasear.png';
import PlomeroImage from '../assets/animation/plomero.png';
import {services} from '../util/const';

const ScheduleScreen = ({navigation}) => {
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
      navigation.navigate(services);
    }, 3000);
  }, [navigation]);

  return (
    <View className="flex-1 bg-skyblue justify-center items-center">
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
        className="text-white text-xl absolute bottom-20">
        Abriendo formulario...
      </Text>
    </View>
  );
};

export default ScheduleScreen;

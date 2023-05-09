import React, {useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import ExploreImage from '../assets/images/explore.png';
import SelectOneImage from '../assets/images/select-one.png';
import SelectTwoImage from '../assets/images/select-two.png';
import HireImage from '../assets/images/hire.png';
import {white} from '../assets/styles/const';
import {home} from '../util/const';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
  },
  slide2: {
    flex: 1,
    backgroundColor: white,
  },
  slide3: {
    flex: 1,
    backgroundColor: white,
  },
  slide4: {
    flex: 1,
    backgroundColor: white,
    position: 'relative',
  },
});

const WalkthroughScreen = ({navigation}) => {
  const swiperRef = useRef(null);

  const handleContinue = () => {
    swiperRef.current.scrollBy(1, true);
  };

  return (
    <Swiper
      style={styles.wrapper}
      loop={false}
      scrollEnabled={true}
      ref={swiperRef}>
      <View style={styles.slide1}>
        <View className="mx-2">
          <Text className="font-bold text-3xl text-black text-center">
            Hola <Text className="text-blueberry">Camilo!</Text>
          </Text>
          <Text className="mt-5 text-black text-xl text-center">
            Nos emociona mucho poder ayudarte, con{' '}
            <Text className="font-bold">easy</Text> podras...
          </Text>
        </View>
      </View>
      <View style={styles.slide2}>
        <View className="mx-3">
          <View className="mt-10">
            <Image source={ExploreImage} />
          </View>
          <Text className="font-bold text-5xl text-blueberry">Explorar</Text>
          <Text className="mt-5 text-black text-xl">
            Entre una decena de servicios
          </Text>
          <Text className="text-black text-xl">
            disponibles para ti, hazlo más{' '}
            <Text className="text-blueberry">easy</Text>
          </Text>
        </View>
        <Text
          onPress={handleContinue}
          className="mr-3 text-xl text-blueberry text-right w-fit absolute bottom-10 right-0">
          Continuar
        </Text>
      </View>
      <View style={styles.slide3}>
        <View className="mt-44">
          <Image source={SelectOneImage} />
        </View>
        <View className="mt-5">
          <Image source={SelectTwoImage} />
        </View>
        <View className="mt-12">
          <View className="ml-3">
            <Text className="mt-1 font-bold text-5xl text-blueberry">
              Seleccionar
            </Text>
            <Text className="mt-3 text-black text-xl">
              La opción que más acomode a tu
            </Text>
            <Text className="text-black text-xl">
              necesidad de forma segura y{' '}
              <Text className="text-blueberry">easy</Text>
            </Text>
          </View>
        </View>
        <Text
          onPress={handleContinue}
          className="mr-3 text-xl text-blueberry text-right w-fit absolute bottom-10 right-0">
          Continuar
        </Text>
      </View>
      <View style={styles.slide4}>
        <View className="mx-3">
          <View className="position absolute top-80 right-0 bg-white z-10 mr-3 py-4 px-3 rounded-xl">
            <Text className="text-base text-chineseblack font-bold">
              Ya vamos en camino,
            </Text>
            <Text className="text-base text-chineseblack font-bold">
              todo lo solucionaremos{' '}
              <Text className="text-blueberry">easy</Text>
            </Text>
          </View>
          <View className="mt-14">
            <Image source={HireImage} />
          </View>
          <View className="mt-12">
            <Text className="font-bold text-5xl text-blueberry">Contratar</Text>
            <Text className="mt-3 text-black text-xl">
              Sin papeleos ni esperas, todo lo
            </Text>
            <Text className="text-black text-xl">
              que necesecitas a solo un click, así de{' '}
              <Text className="text-blueberry">easy</Text>
            </Text>
          </View>
        </View>
        <Text
          onPress={() => {
            navigation.navigate(home);
          }}
          className="mr-3 text-xl text-blueberry text-right w-fit absolute bottom-10 right-0">
          Terminar
        </Text>
      </View>
    </Swiper>
  );
};

export default WalkthroughScreen;

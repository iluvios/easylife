import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  ImageBackground,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import IconImageComponent from '../components/iconImage';
import LogoRed from '../assets/images/logo-red.png';
import MessageIcon from '../assets/icons/message.png';
import BGMapRed from '../assets/images/bg-map-red.png';
import NotchImage from '../assets/images/notch.png';
import {support, home, faqsStack} from '../util/const';
import {platinum} from '../assets/styles/const';

const CanceledServiceScreen = ({navigation}) => {
  const [isPanelVisible, setIsPanelVisible] = useState(true);
  const [checkboxValues, setCheckboxValues] = useState({
    delayedService: false,
    iSolved: false,
    neverArrived: false,
  });

  const handleToggleCheckbox = (name, value) => {
    setCheckboxValues({
      ...checkboxValues,
      [name]: value,
    });
  };

  const handleToggleModal = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  return (
    <View className="bg-white h-full">
      <ImageBackground source={BGMapRed} resizeMode="cover" className="h-full">
        <View className="mx-3 flex flex-row justify-end mt-10">
          <TouchableHighlight
            onPress={() => {
              navigation.navigate(faqsStack, {screen: support});
            }}
            className="rounded-xl p-1 w-12 h-12 shadow-2xl shadow-blueberry bg-white flex justify-center items-center">
            <IconImageComponent image={MessageIcon} height={35} width={35} />
          </TouchableHighlight>
        </View>
        <Animatable.View
          className="mt-11 justify-center items-center"
          animation="fadeInRight">
          <Image source={LogoRed} />
        </Animatable.View>
      </ImageBackground>
      <Animatable.View
        animation="slideInUp"
        style={{
          width: '100%',
          flex: 1,
          position: 'absolute',
          bottom: 0,
        }}>
        <View className="bg-white min-h-fit rounded-tr-3xl rounded-tl-3xl">
          <View className="ml-3">
            <View className="mt-5 flex justify-center items-center">
              <TouchableHighlight onPress={handleToggleModal}>
                <Image source={NotchImage} />
              </TouchableHighlight>
            </View>
            {/*Buscando */}
            <View className="mt-5">
              {isPanelVisible && (
                <Animatable.View animation="fadeInUp">
                  <Text
                    style={{
                      fontFamily: 'Manrope-Bold',
                    }}
                    className="mt-5 text-red text-3xl text-center">
                    Servicio cancelado
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Manrope-Regular',
                    }}
                    className="text-chineseblack text-xl mt-5">
                    Cuál fue la razón de la cancelación? queremos mejorar pora
                    tí.
                  </Text>
                  <View className="flex flex-row mt-8 mb-8">
                    <CheckBox
                      tintColors={platinum}
                      disabled={false}
                      value={checkboxValues.delayedService}
                      onValueChange={newValue =>
                        handleToggleCheckbox('delayedService', newValue)
                      }
                    />
                    <Text
                      style={{
                        fontFamily: 'Manrope-Regular',
                      }}
                      className="ml-1 text-xl text-platinum">
                      Servicio demorado, tengo afán
                    </Text>
                  </View>
                  <View className="flex flex-row mb-8">
                    <CheckBox
                      tintColors={platinum}
                      disabled={false}
                      value={checkboxValues.iSolved}
                      onValueChange={newValue =>
                        handleToggleCheckbox('iSolved', newValue)
                      }
                    />
                    <Text
                      style={{
                        fontFamily: 'Manrope-Regular',
                      }}
                      className="ml-1 text-xl text-platinum">
                      Ya solucioné el problema
                    </Text>
                  </View>
                  <View className="flex flex-row mb-8">
                    <CheckBox
                      tintColors={platinum}
                      disabled={false}
                      value={checkboxValues.neverArrived}
                      onValueChange={newValue =>
                        handleToggleCheckbox('neverArrived', newValue)
                      }
                    />
                    <Text
                      style={{
                        fontFamily: 'Manrope-Regular',
                      }}
                      className="ml-1 text-xl text-platinum">
                      El servicio nunca llegó
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Manrope-Regular',
                    }}
                    className="ml-2 text-xl text-platinum">
                    Otra razón, cuentanos
                  </Text>
                  <Animatable.Text
                    style={{
                      fontFamily: 'Manrope-Regular',
                    }}
                    animation="fadeInLeft"
                    onPress={() => {
                      navigation.navigate(home);
                    }}
                    className="mt-12 mb-8 text-xl text-blueberry text-center">
                    Continuar
                  </Animatable.Text>
                </Animatable.View>
              )}
            </View>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default CanceledServiceScreen;

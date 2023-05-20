import React from 'react';
import {Text, View, ScrollView, TouchableHighlight, Image} from 'react-native';
import IconImageComponent from '../components/iconImage';
import ArrowLeftIcon from '../assets/icons/arrow-left.png';
import ArrowBottomBigIcon from '../assets/icons/arrow-bottom-big.png';
import ConduccionImage from '../assets/images/services/conduccion-100.png';
import TeacherIcon from '../assets/icons/teacher-small.png';
import LocationIcon from '../assets/icons/location-small.png';
import MoneyIcon from '../assets/icons/money-small.png';
import {StackActions} from '@react-navigation/native';
import {requestService} from '../util/const';

const popAction = StackActions.pop(1);

const ServiceScreen = ({navigation}) => {
  return (
    <ScrollView className="bg-white h-full">
      <View className="mx-3">
        <View className="flex flex-row items-center mt-10">
          <TouchableHighlight
            onPress={() => {
              navigation.dispatch(popAction);
            }}
            className="rounded-xl p-1 w-12 h-12 shadow-2xl shadow-blueberry bg-white flex justify-center items-center">
            <IconImageComponent image={ArrowLeftIcon} height={40} width={40} />
          </TouchableHighlight>
          <Text className="text-3xl font-bold text-chineseblack ml-5">
            Conductor elegido
          </Text>
        </View>
        <View className="mt-12 justify-center items-center">
          <Image source={ConduccionImage} width={100} height={100} />
        </View>
        <View className="mt-5">
          <Text className="text-chineseblack text-lg">
            1. El conductor te llevará en tú vehiculo.
          </Text>
          <Text className="text-chineseblack text-lg mt-3">
            2. El valor del servicio cubre el máx de{' '}
            <Text className="font-bold">1 hora</Text>.
          </Text>
          <Text className="text-chineseblack text-lg mt-3">
            3. El recargo adicional por minuto es de{' '}
            <Text className="font-bold">$800</Text>.
          </Text>
          <Text className="text-platinum text-base font-bold">
            El valor del tiempo adicional se cargara a tu cuenta
          </Text>
        </View>
        <View className="mt-8">
          <Text className="text-chineseblack text-xl font-bold">
            Detalles de solicitud
          </Text>
          <Text className="mt-5 text-platinum text-lg">Recogida</Text>
          <View className="flex-row mt-3 justify-start items-center">
            <IconImageComponent image={TeacherIcon} width={24} height={24} />
            <Text
              className="ml-3 text-chineseblack text-xl"
              style={{
                maxWidth: 250,
              }}>
              Carrera 49, Cl. 7 Sur #50
            </Text>
            <View className="ml-3">
              <IconImageComponent
                image={ArrowBottomBigIcon}
                width={15}
                height={6.25}
              />
            </View>
            <Text className="text-blueberry text-lg absolute right-0 mr-3">
              Mapa
            </Text>
          </View>
          <Text className="mt-5 text-platinum text-lg">Destino</Text>
          <View className="flex-row mt-3 justify-start items-center">
            <IconImageComponent image={LocationIcon} width={17} height={20} />
            <Text
              className="ml-3 text-chineseblack text-xl"
              style={{
                maxWidth: 250,
              }}>
              Tv. 35c Sur #33-57
            </Text>
            <View className="ml-3">
              <IconImageComponent
                image={ArrowBottomBigIcon}
                width={15}
                height={6.25}
              />
            </View>
            <Text className="text-blueberry text-lg absolute right-0 mr-3">
              Mapa
            </Text>
          </View>
          <Text className="mt-5 text-platinum text-lg">Medio de pago</Text>
          <View className="flex-row mt-3 justify-start items-center">
            <IconImageComponent image={MoneyIcon} width={24} height={24} />
            <Text className="ml-3 text-chineseblack text-xl">Efectivo</Text>
            <View className="ml-3 ">
              <IconImageComponent
                image={ArrowBottomBigIcon}
                width={15}
                height={6.25}
              />
            </View>
          </View>
        </View>
        <View className="my-10 flex-row justify-between">
          <View className="flex-col">
            <TouchableHighlight
              className="bg-skyblue w-44 py-4 rounded-full flex justify-center items-center"
              onPress={() => {
                navigation.navigate(requestService);
              }}>
              <Text className="text-xl font-bold text-white">Agendar</Text>
            </TouchableHighlight>
            <Text className="text-lg text-skyblue text-center">
              $100.000 cop
            </Text>
          </View>
          <View className="flex-col">
            <TouchableHighlight
              className="bg-blueberry w-44 py-4 rounded-full flex justify-center items-center"
              onPress={() => {
                navigation.navigate(requestService);
              }}>
              <Text className="text-xl font-bold text-white">Solicitar ya</Text>
            </TouchableHighlight>
            <Text className="text-lg text-blueberry text-center">
              $120.000 cop
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ServiceScreen;

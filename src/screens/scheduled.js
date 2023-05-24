import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableHighlight, Image} from 'react-native';
import ConductorImage from '../assets/images/services/conductor.png';
import TaskImage from '../assets/images/task.png';
import IconImageComponent from '../components/iconImage';
import HomeOutline from '../assets/icons/home-outline.png';
import ArrowLeftIcon from '../assets/icons/arrow-left.png';
import MoneySmallIcon from '../assets/icons/money-small.png';
import CardAddSmallIcon from '../assets/icons/card-add.png';
import AddIcon from '../assets/icons/add.png';
import CalendarSmallIcon from '../assets/icons/calendar-small.png';
import ClockSmallIcon from '../assets/icons/clock.png';
import {StackActions} from '@react-navigation/native';
import {services, formateDate, formateTime} from '../util/const';
import {green, blueberry, platinum} from '../assets/styles/const';
const popAction = StackActions.pop(1);

const servicesMock = [
  {
    id: 1,
    service: 'Conductor elegido',
    state: 'En curso',
    image: ConductorImage,
    imageColor: green,
    address: 'Carrera 49, Cl. 7 Sur #50',
    total: '$ 100.000 cop',
    date: new Date(),
    iconImage: MoneySmallIcon,
    paymentMethod: 'Efectivo',
    showDate: false,
  },
  {
    id: 2,
    service: 'Conductor elegido',
    state: 'Agendado',
    image: ConductorImage,
    imageColor: blueberry,
    address: 'Carrera 49, Cl. 7 Sur #50',
    total: '$ 80.000 cop',
    date: new Date(),
    iconImage: MoneySmallIcon,
    paymentMethod: 'Efectivo',
    showDate: true,
  },
  {
    id: 3,
    service: 'Conductor elegido',
    state: 'Finalizado',
    image: ConductorImage,
    imageColor: platinum,
    address: 'Carrera 49, Cl. 7 Sur #50',
    total: '$ 50.000 cop',
    date: new Date(),
    iconImage: CardAddSmallIcon,
    paymentMethod: 'Débito Bancolombia',
    showDate: false,
  },
  {
    id: 4,
    service: 'Conductor elegido',
    state: 'Finalizado',
    image: ConductorImage,
    imageColor: platinum,
    address: 'Carrera 49, Cl. 7 Sur #50',
    total: '$ 120.000 cop',
    date: new Date(),
    iconImage: CardAddSmallIcon,
    paymentMethod: 'Débito Bancolombia',
    showDate: false,
  },
  {
    id: 5,
    service: 'Conductor elegido',
    state: 'Finalizado',
    image: ConductorImage,
    imageColor: platinum,
    address: 'Carrera 49, Cl. 7 Sur #50',
    total: '$ 190.000 cop',
    date: new Date(),
    iconImage: CardAddSmallIcon,
    paymentMethod: 'Débito Bancolombia',
    showDate: false,
  },
  {
    id: 6,
    service: 'Conductor elegido',
    state: 'Finalizado',
    image: ConductorImage,
    imageColor: platinum,
    address: 'Carrera 49, Cl. 7 Sur #50',
    total: '$ 180.000 cop',
    date: new Date(),
    iconImage: CardAddSmallIcon,
    paymentMethod: 'Débito Bancolombia',
    showDate: false,
  },
];
const ScheduledScreen = ({navigation}) => {
  const [hasScheludedServices, setHasScheludedServices] = useState(true);

  const renderService = ({
    id,
    service,
    state,
    image,
    imageColor,
    address,
    total,
    date,
    iconImage,
    paymentMethod,
    showDate,
  }) => {
    return (
      <View
        key={id}
        className="bg-white rounded-3xl mb-5 flex-col py-2 px-3 shadow-md shadow-black items-center">
        <View className="flex-row justify-between w-full">
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
            }}
            className="text-xl text-chineseblack">
            {service}
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
              color: imageColor,
            }}
            className="text-base ">
            {state}
          </Text>
        </View>
        <View className="flex-row justify-center items-center mt-3">
          <Image
            source={image}
            style={{
              tintColor: imageColor,
            }}
          />
          <View className="flex-col ml-5">
            <View className="flex-row items-center">
              <IconImageComponent
                image={HomeOutline}
                height={24}
                width={24}
                color={imageColor}
              />
              <Text
                className="ml-1 text-lg text-chineseblack"
                style={{
                  fontFamily: 'Manrope-Regular',
                  maxWidth: 217,
                }}>
                {address}
              </Text>
            </View>
            {showDate && (
              <View className="flex-row justify-between mt-1">
                <View className="flex-row items-center">
                  <IconImageComponent
                    image={CalendarSmallIcon}
                    width={24}
                    height={24}
                  />
                  <Text
                    style={{
                      fontFamily: 'Manrope-Regular',
                    }}
                    className="ml-1 text-chineseblack text-lg">
                    {formateDate(date)}
                  </Text>
                </View>

                <View className="flex-row items-center">
                  <IconImageComponent
                    image={ClockSmallIcon}
                    width={24}
                    height={24}
                  />
                  <Text
                    style={{
                      fontFamily: 'Manrope-Regular',
                    }}
                    className="ml-1 text-chineseblack text-lg">
                    {formateTime(date)}
                  </Text>
                </View>
              </View>
            )}
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              className="mt-1 text-lg text-chineseblack">
              {total}
            </Text>
            <View className="mt-1 flex flex-row items-center">
              <IconImageComponent
                image={iconImage}
                height={20}
                width={20}
                color={platinum}
              />
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="ml-2 text-lg text-platinum">
                {paymentMethod}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View className="bg-white h-full">
      <View className="mx-3">
        <View className="flex flex-row items-center mt-10">
          <TouchableHighlight
            onPress={() => {
              navigation.dispatch(popAction);
            }}
            className="rounded-xl p-1 w-12 h-12 shadow-2xl shadow-blueberry bg-white flex justify-center items-center">
            <IconImageComponent image={ArrowLeftIcon} height={40} width={40} />
          </TouchableHighlight>
          <Text
            style={{
              fontFamily: 'Comfortaa-Bold',
            }}
            className="text-3xl text-chineseblack ml-5">
            Mis servicios
          </Text>
        </View>
        {hasScheludedServices ? (
          <ScrollView className="mt-12">
            {servicesMock.map(service => {
              if (service.state !== 'Finalizado') {
                return renderService(service);
              }
            })}
            <View
              className="border-platinum mt-8"
              style={{
                borderTopWidth: 1,
              }}
            />
            <Text className="mt-8 text-platinum font-bold text-xl">
              Historial de servicios
            </Text>
            <View className="mt-5 mb-24">
              {servicesMock.map(service => {
                if (service.state === 'Finalizado') {
                  return renderService(service);
                }
              })}
            </View>
          </ScrollView>
        ) : (
          <View
            style={{
              height: '89%',
            }}>
            <View className="mt-12 flex justify-center items-center">
              <Image source={TaskImage} />
            </View>
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              className="mt-5 text-platinum text-center text-xl">
              Sin servicios agendados
            </Text>
            <View className="flex-row justify-center items-center absolute bottom-14 w-full">
              <IconImageComponent image={AddIcon} width={24} height={24} />
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                onPress={() => navigation.navigate(services)}
                className="ml-3 text-xl text-blueberry">
                Programar nuevo servicio
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default ScheduledScreen;

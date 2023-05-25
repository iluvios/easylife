import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import IconImageComponent from '../components/iconImage';
import CalendarSmallIcon from '../assets/icons/calendar-small.png';
import ClockSmallIcon from '../assets/icons/clock.png';
import ArrowLeftIcon from '../assets/icons/arrow-left.png';
import MoneyIcon from '../assets/icons/money-small.png';
import ArrowBottomBigIcon from '../assets/icons/arrow-bottom-big.png';
import TeacherIcon from '../assets/icons/teacher-small.png';
import ConduccionImage from '../assets/images/services/conductor.png';
import {StackActions} from '@react-navigation/native';
import {scheduled, formateDate, formateTime} from '../util/const';
import {platinum} from '../assets/styles/const';

const popAction = StackActions.pop(1);

const ProgrammingScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [hour, setHour] = useState(new Date());
  const [openHour, setOpenHour] = useState(false);
  const [remember, setRemember] = useState('');
  const [rememberClicked, setRememberClicked] = useState('');

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
          <Text
            style={{
              fontFamily: 'Comfortaa-Bold',
              maxWidth: 331,
            }}
            className="text-3xl text-chineseblack ml-5">
            Programar servicio
          </Text>
        </View>
        <View className="mt-10 flex-row w-full justify-center items-center">
          <Image
            source={ConduccionImage}
            style={{
              height: 80,
              width: 80,
            }}
          />
          <View className="flex-col ml-3">
            <View className="flex-row justify-between">
              <Text
                style={{
                  fontFamily: 'Manrope-Bold',
                }}
                className="text-xl text-chineseblack">
                Conductor elegido
              </Text>
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="ml-2 text-lg text-blueberry">
                Cambiar
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="text-xl text-platinum">
                Detalles del servicio
              </Text>
              <View className="ml-3">
                <IconImageComponent
                  image={ArrowBottomBigIcon}
                  height={7}
                  width={15}
                  color={platinum}
                />
              </View>
            </View>
          </View>
        </View>
        <View className="mt-10">
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
            }}
            className="text-platinum text-lg">
            Detalles de solicitud
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-platinum text-lg mt-5">
            Dirección
          </Text>
          <View className="flex-row mt-3 justify-start items-center">
            <IconImageComponent image={TeacherIcon} width={24} height={24} />
            <TouchableOpacity onPress={() => {}}>
              <View className="flex-row justify-start items-center">
                <Text
                  className="ml-3 text-chineseblack text-xl"
                  style={{
                    maxWidth: 246,
                    fontFamily: 'Manrope-Regular',
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
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              className="text-blueberry text-lg absolute right-0 mr-3">
              Mapa
            </Text>
          </View>

          <View className="flex-row justify-between mt-5">
            <View className="flex-col">
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="text-platinum text-lg">
                Fecha
              </Text>
              <View className="flex-row mt-3 justify-start items-center">
                <IconImageComponent
                  image={CalendarSmallIcon}
                  width={24}
                  height={24}
                />
                <TouchableOpacity
                  onPress={() => {
                    setOpenDate(true);
                  }}>
                  <View className="flex-row justify-start items-center">
                    <Text
                      style={{
                        fontFamily: 'Manrope-Regular',
                      }}
                      className="ml-3 text-chineseblack text-xl">
                      {formateDate(date)}
                    </Text>
                    <View className="ml-3 ">
                      <IconImageComponent
                        image={ArrowBottomBigIcon}
                        width={15}
                        height={6.25}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-col">
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="text-platinum text-lg">
                Hora
              </Text>
              <View className="flex-row mt-3 justify-start items-center mr-3">
                <IconImageComponent
                  image={ClockSmallIcon}
                  width={24}
                  height={24}
                />
                <TouchableOpacity
                  onPress={() => {
                    setOpenHour(true);
                  }}>
                  <View className="flex-row justify-start items-center">
                    <Text
                      style={{
                        fontFamily: 'Manrope-Regular',
                      }}
                      className="ml-3 text-chineseblack text-xl">
                      {formateTime(hour)}
                    </Text>
                    <View className="ml-3 ">
                      <IconImageComponent
                        image={ArrowBottomBigIcon}
                        width={15}
                        height={6.25}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="mt-5 text-platinum text-lg">
            Medio de pago
          </Text>
          <View className="flex-row mt-3 justify-start items-center">
            <IconImageComponent image={MoneyIcon} width={24} height={24} />
            <TouchableOpacity onPress={() => {}}>
              <View className="flex-row justify-start items-center">
                <Text
                  style={{
                    fontFamily: 'Manrope-Regular',
                  }}
                  className="ml-3 text-chineseblack text-xl">
                  Efectivo
                </Text>
                <View className="ml-3 ">
                  <IconImageComponent
                    image={ArrowBottomBigIcon}
                    width={15}
                    height={6.25}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="mt-5 text-platinum text-lg">
            Total
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="mt-3 text-chineseblack text-xl">
            $100.000 cop
          </Text>
          <Text className="mt-5 text-platinum text-lg">Nota</Text>
          <View
            className={`mt-3 flex flex-row justify-center items-start appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline h-20 mr-3 ${
              rememberClicked ? 'border-blueberry' : 'border-platinum'
            }`}>
            <TextInput
              onFocus={() => setRememberClicked(true)}
              onBlur={() => setRememberClicked(false)}
              keyboardType="ascii-capable"
              multiline={true}
              className="text-sm flex-1 ml-2 text-black"
              placeholderTextColor={platinum}
              onChangeText={value => setRemember(value)}
              style={{
                fontFamily: 'Manrope-Regular',
              }}
            />
          </View>
        </View>
        <TouchableHighlight
          className="mt-12 mb-10 bg-skyblue py-4 rounded-full flex justify-center items-center"
          onPress={() => {
            navigation.navigate(scheduled);
          }}>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
            }}
            className="text-xl text-white">
            Confirmar
          </Text>
        </TouchableHighlight>
      </View>
      <DatePicker
        mode="date"
        modal
        open={openDate}
        date={date}
        onConfirm={date => {
          setOpenDate(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpenDate(false);
        }}
      />
      <DatePicker
        mode="time"
        modal
        open={openHour}
        date={hour}
        onConfirm={date => {
          setOpenHour(false);
          setHour(date);
        }}
        onCancel={() => {
          setOpenHour(false);
        }}
      />
    </ScrollView>
  );
};

export default ProgrammingScreen;

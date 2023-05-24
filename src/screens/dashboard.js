import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import CardWithIcon from '../components/cardWithIcon';
import ProfileIcon from '../assets/icons/profile.png';
import ArrowBottomIcon from '../assets/icons/arrow-bottom.png';
import CalendarIcon from '../assets/icons/calendar.png';
import TicketStarIcon from '../assets/icons/ticket-star.png';
import SearchWhiteIcon from '../assets/icons/search-white.png';
import AdvertisementImage from '../assets/images/advertisement.png';

import {Services, service, userProfile, faqsStack} from '../util/const';
import {platinum} from '../assets/styles/const';

const DashboardScreen = ({navigation}) => {
  const half = Math.ceil(Services.length / 2);
  const firstRow = Services.slice(0, half);
  const secondRow = Services.slice(half);

  const columns = 3;
  const rows = Math.ceil(Services.length / columns);
  const rowsArr = Array.from(Array(rows)).map((_, i) => i);

  const [searchText, setSearchText] = useState('');
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isViewServicesOpen, setIsViewServicesOpen] = useState(false);

  const handleChangeSearchInput = value => {
    setSearchText(value);
  };

  const handleChangeViewServicesOpen = () => {
    setIsViewServicesOpen(!isViewServicesOpen);
  };

  return (
    <ScrollView className="bg-white h-full w-full">
      <View>
        <View className="flex flex-row mt-11 ml-3">
          <Animatable.View className="flex-row" animation="fadeInLeft">
            <TouchableHighlight
              className="rounded-xl"
              onPress={() => {
                navigation.navigate(faqsStack, {screen: userProfile});
              }}>
              <Image source={ProfileIcon} />
            </TouchableHighlight>
            <View className="flex-col ml-3">
              <Text
                style={{
                  fontFamily: 'Comfortaa-Bold',
                }}
                className="text-3xl text-blueberry">
                Camilo
              </Text>
              <View className="flex-row justify-center items-center">
                <Text
                  style={{
                    fontFamily: 'Manrope-Regular',
                  }}
                  className="text-chineseblack text-xs">
                  Carrera 49, Cl. 7 Sur #50
                </Text>
                <Image source={ArrowBottomIcon} className="ml-3" />
              </View>
            </View>
          </Animatable.View>
          <Animatable.View
            className="absolute right-0 mr-3"
            animation="fadeInRight">
            <View className="shadow-2xl shadow-blueberry p-1 bg-white rounded-xl">
              <Image source={CalendarIcon} />
            </View>
          </Animatable.View>
        </View>

        <View className="mt-10 ml-3">
          <Animatable.View className="flex flex-row" animation="fadeInDown">
            <View
              className={`flex flex-row justify-center items-center appearance-none border rounded-xl w-4/5 leading-tight focus:outline-none focus:shadow-outline 
          ${isSearchClicked ? 'border-blueberry' : 'border-platinum'}`}>
              <TextInput
                onFocus={() => setIsSearchClicked(true)}
                onBlur={() => setIsSearchClicked(false)}
                className="text-sm flex-1 ml-2 py-3 text-black"
                placeholder="Buscar"
                placeholderTextColor={platinum}
                onChangeText={value => handleChangeSearchInput(value)}
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
              />
            </View>
            <TouchableHighlight
              onPress={() => {
                console.log(searchText);
              }}
              className="absolute right-0 mr-3 p-3 bg-blueberry rounded-xl justify-center items-center">
              <Image source={SearchWhiteIcon} />
            </TouchableHighlight>
          </Animatable.View>
        </View>

        {!isViewServicesOpen && (
          <View className="mt-5 ml-3">
            <Image source={AdvertisementImage} className="rounded-3xl" />
          </View>
        )}

        <View className="mt-10 ml-3">
          <View className="flex flex-row justify-between">
            <Text
              style={{
                fontFamily: 'Manrope-Bold',
              }}
              className="text-xl text-platinum">
              Servicios
            </Text>
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              onPress={handleChangeViewServicesOpen}
              className="text-lg text-blueberry mr-3">
              {isViewServicesOpen ? 'Ocultar' : 'Ver todos'}
            </Text>
          </View>
        </View>
        <View className="flex flex-col mt-5">
          {isViewServicesOpen ? (
            <View className="flex-row">
              {[...Array(columns)].map((_, j) => (
                <View key={j} style={{flex: 1}}>
                  {rowsArr.map(i => {
                    const srv = Services[i * columns + j];
                    if (!srv) {
                      return null;
                    }
                    return (
                      <CardWithIcon
                        navigate={service}
                        key={srv.id}
                        image={srv.image}
                        title={srv.title}
                        isLast={srv}
                      />
                    );
                  })}
                </View>
              ))}
            </View>
          ) : (
            <>
              <Animatable.View className="flex-row" animation="fadeInRight">
                {firstRow.map((srv, index) => (
                  <CardWithIcon
                    key={srv.id}
                    image={srv.image}
                    title={srv.title}
                    navigate={service}
                    isLast={index === Services.length - 1}
                  />
                ))}
              </Animatable.View>
              <Animatable.View className="flex-row" animation="fadeInDown">
                {secondRow.map((srv, index) => (
                  <CardWithIcon
                    navigate={service}
                    key={srv.id}
                    image={srv.image}
                    title={srv.title}
                    isLast={index === Services.length - 1}
                  />
                ))}
              </Animatable.View>
            </>
          )}
        </View>
        <Animatable.View animation="fadeInUp">
          <TouchableHighlight
            className="bg-white my-10 py-4 rounded-full border-turquoise mx-3"
            style={{
              borderWidth: 1,
            }}
            onPress={() => {}}>
            <View className="flex flex-row justify-center items-center">
              <Image source={TicketStarIcon} />
              <Text
                style={{
                  fontFamily: 'Comfortaa-Bold',
                }}
                className="text-xl text-turquoise ml-3">
                Tus creditos
              </Text>
            </View>
          </TouchableHighlight>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;

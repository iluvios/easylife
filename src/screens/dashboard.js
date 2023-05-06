import React, {useState} from 'react';
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

import LimpiezaImage from '../assets/images/services/limpieza.png';
import ConduccionImage from '../assets/images/services/conduccion.png';
import BarberiaImage from '../assets/images/services/barberia.png';
import GruaImage from '../assets/images/services/grua.png';
import LavadoImage from '../assets/images/services/lavado.png';
import ManicureImage from '../assets/images/services/manicure.png';
import MantenimientoImage from '../assets/images/services/mantenimiento.png';
import MaquillajeImage from '../assets/images/services/maquillaje.png';
import MedicoImage from '../assets/images/services/medico.png';
import MudanzaImage from '../assets/images/services/mudanza.png';
import NineroImage from '../assets/images/services/ninero.png';
import PasearImage from '../assets/images/services/pasear.png';
import PeluqueriaImage from '../assets/images/services/peluqueria.png';
import PlomeriaImage from '../assets/images/services/plomeria.png';
import TallerImage from '../assets/images/services/taller.png';
import VeterinariaImage from '../assets/images/services/veterinaria.png';

import {Services} from '../util/const';
import {blueberry, platinum} from '../assets/styles/const';

const DashboardScreen = () => {
  const half = Math.ceil(Services.length / 2);
  const firstRow = Services.slice(0, half);
  const secondRow = Services.slice(half);

  const [searchText, setSearchText] = useState('');
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleChangeSearchInput = value => {
    setSearchText(value);
  };

  const handleImageCard = service => {
    switch (service) {
      case 'barberia':
        return BarberiaImage;
      case 'conduccion':
        return ConduccionImage;
      case 'grua':
        return GruaImage;
      case 'lavado':
        return LavadoImage;
      case 'limpieza':
        return LimpiezaImage;
      case 'manicure':
        return ManicureImage;
      case 'mantenimiento':
        return MantenimientoImage;
      case 'maquillaje':
        return MaquillajeImage;
      case 'medico':
        return MedicoImage;
      case 'mudanza':
        return MudanzaImage;
      case 'ninero':
        return NineroImage;
      case 'pasear':
        return PasearImage;
      case 'peluqueria':
        return PeluqueriaImage;
      case 'plomeria':
        return PlomeriaImage;
      case 'taller':
        return TallerImage;
      case 'veterinaria':
        return VeterinariaImage;
      default:
        return MantenimientoImage;
    }
  };

  return (
    <ScrollView className="bg-white h-full w-full">
      <View className="ml-3">
        <View className="flex flex-row mt-11">
          <Image source={ProfileIcon} />
          <View className="flex-col ml-3">
            <Text className="text-3xl text-blueberry">Camilo</Text>
            <View className="flex-row justify-center items-center">
              <Text className="text-chineseblack text-xs">
                Carrera 49, Cl. 7 Sur #50
              </Text>
              <Image source={ArrowBottomIcon} className="ml-3" />
            </View>
          </View>
          <View className="absolute right-0 mr-3">
            <View className="shadow-2xl shadow-blueberry p-1 bg-white rounded-xl">
              <Image source={CalendarIcon} />
            </View>
          </View>
        </View>

        <View className="mt-10">
          <View className="flex flex-row">
            <View
              className={`flex flex-row justify-center items-center shadow appearance-none border rounded-xl w-4/5 leading-tight focus:outline-none focus:shadow-outline 
          ${isSearchClicked ? 'border-blueberry' : 'border-platinum'}`}>
              <TextInput
                onFocus={() => setIsSearchClicked(true)}
                onBlur={() => setIsSearchClicked(false)}
                className="text-sm flex-1 ml-2 py-3 text-black"
                placeholder="Buscar"
                placeholderTextColor={platinum}
                onChangeText={value => handleChangeSearchInput(value)}
                style={{
                  fontFamily: 'Comfortaa',
                }}
              />
            </View>
            <View className="absolute right-0 mr-3 p-3 bg-blueberry rounded-xl justify-center items-center">
              <Image source={SearchWhiteIcon} />
            </View>
          </View>
        </View>

        <View className="mt-5">
          <Image source={AdvertisementImage} className="rounded-3xl" />
        </View>

        <View className="mt-10">
          <View className="flex flex-row justify-between">
            <Text className="text-xl font-bold text-platinum">Servicios</Text>
            <Text className="text-lg text-blueberry mr-3">Ver todos</Text>
          </View>
        </View>
        <View className="flex flex-col mt-5">
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {firstRow.map((service, index) => (
              <CardWithIcon
                key={service.id}
                image={handleImageCard(service.id)}
                title={service.title}
                isLast={index === Services.length - 1}
              />
            ))}
          </ScrollView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {secondRow.map((service, index) => (
              <CardWithIcon
                key={service.id}
                image={handleImageCard(service.id)}
                title={service.title}
                isLast={index === Services.length - 1}
              />
            ))}
          </ScrollView>
        </View>
        <TouchableHighlight
          className="bg-white my-10 py-4 rounded-full border-turquoise border-2 mr-3"
          onPress={() => {}}>
          <View className="flex flex-row justify-center items-center">
            <Image source={TicketStarIcon} />
            <Text className="text-xl font-bold text-turquoise ml-3">
              Tus creditos
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;

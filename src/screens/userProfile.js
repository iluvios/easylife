import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Toast from 'react-native-toast-message';
import LinearGradient from 'react-native-linear-gradient';
import IconImageComponent from '../components/iconImage';
import PersonIcon from '../assets/icons/person.png';
import CellphoneIcon from '../assets/icons/phone.png';
import EmailIcon from '../assets/icons/arroa.png';
import TicketStarNormalIcon from '../assets/icons/ticket-star-normal.png';
import ArrowLeftIcon from '../assets/icons/arrow-left.png';
import BGStreet from '../assets/images/bg-street.png';
import EmojiNormalImage from '../assets/images/emoji-normal.png';
import EditIcon from '../assets/icons/edit.png';
import {AuthContext} from '../navigation/AuthProvider';
import {dashboard, dashboardStack} from '../util/const';
import {platinum, blueberry} from '../assets/styles/const';

const UserProfileScreen = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  const [state, setState] = useState({
    name: '',
    phone: '',
    email: false,
    isEditable: false,
  });

  const handleChangeInput = (name, value) => {
    setState({...state, [name]: value});
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Cambios guardados con éxito',
    });
  };

  return (
    <LinearGradient
      className="w-full h-full"
      colors={['#0099FF', '#2A69EB']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <View source={BGStreet} resizeMode="cover" className="h-full">
        <View className="mx-3">
          <View className="flex flex-row justify-between items-center mt-10">
            <View className="flex-row justify-center items-center">
              <TouchableHighlight
                onPress={() => {
                  navigation.navigate(dashboardStack, {screen: dashboard});
                }}
                className="rounded-xl p-1 w-12 h-12 shadow-2xl shadow-blueberry bg-white flex justify-center items-center">
                <IconImageComponent
                  image={ArrowLeftIcon}
                  height={40}
                  width={40}
                />
              </TouchableHighlight>
              <Text
                style={{
                  fontFamily: 'Comfortaa-Bold',
                }}
                className="ml-5 text-white text-3xl">
                {state.isEditable ? 'Editar perfil' : 'Perfil'}
              </Text>
            </View>
            {!state.isEditable && (
              <TouchableHighlight
                onPress={() => {
                  handleChangeInput('isEditable', !state.isEditable);
                }}
                className="rounded-xl p-1 w-12 h-12 shadow-2xl shadow-blueberry bg-white flex justify-center items-center">
                <IconImageComponent image={EditIcon} height={30} width={30} />
              </TouchableHighlight>
            )}
          </View>
          <View className="justify-center items-center mt-3">
            <Image source={EmojiNormalImage} />
            <View className="mt-5 flex-row justify-center items-center">
              <IconImageComponent
                image={TicketStarNormalIcon}
                height={30}
                width={30}
              />
              <Text
                style={{
                  fontFamily: 'Manrope-Bold',
                }}
                className="ml-3 text-white text-xl">
                3.500
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          width: '100%',
          height: '66%',
          flex: 1,
          position: 'absolute',
          bottom: 0,
        }}>
        <View className="bg-white min-h-fit rounded-tr-3xl rounded-tl-3xl">
          <View className="mx-3">
            <View className="mt-10">
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="text-platinum text-base mb-3">
                Nombre y apellido
              </Text>
              <View
                className={`mb-5 flex flex-row justify-center items-center appearance-none border rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline 
          ${state.isEditable ? 'border-blueberry' : 'border-platinum'}`}>
                <View className="pl-4">
                  <IconImageComponent
                    image={PersonIcon}
                    color={state.isEditable ? blueberry : platinum}
                    height={20}
                    width={20}
                  />
                </View>
                <TextInput
                  editable={state.isEditable}
                  autoCapitalize="words"
                  keyboardType="ascii-capable"
                  className="text-sm flex-1 ml-2 py-3 text-black"
                  placeholder="Camilo H."
                  placeholderTextColor={platinum}
                  onChangeText={value => handleChangeInput('name', value)}
                  style={{
                    fontFamily: 'Manrope-Regular',
                  }}
                />
              </View>
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="text-platinum text-base mb-3">
                Celular
              </Text>
              <View
                className={`mb-5 flex flex-row justify-center items-center appearance-none border rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline 
          ${state.isEditable ? 'border-blueberry' : 'border-platinum'}`}>
                <View className="pl-4">
                  <IconImageComponent
                    image={CellphoneIcon}
                    color={state.isEditable ? blueberry : platinum}
                    height={20}
                    width={20}
                  />
                </View>
                <TextInput
                  maxLength={10}
                  editable={state.isEditable}
                  keyboardType="number-pad"
                  className="text-sm flex-1 ml-2 py-3 text-black"
                  placeholder="+57 305 3424910"
                  placeholderTextColor={platinum}
                  onChangeText={value => handleChangeInput('phone', value)}
                  style={{
                    fontFamily: 'Manrope-Regular',
                  }}
                />
              </View>
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="text-platinum text-base mb-3">
                Email
              </Text>
              <View
                className={`flex flex-row justify-center items-center appearance-none border rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline 
          ${state.isEditable ? 'border-blueberry' : 'border-platinum'}`}>
                <View className="pl-4">
                  <IconImageComponent
                    image={EmailIcon}
                    color={state.isEditable ? blueberry : platinum}
                    height={20}
                    width={20}
                  />
                </View>
                <TextInput
                  editable={state.isEditable}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  className="text-sm flex-1 ml-2 py-3 text-black"
                  placeholder="latameasylife@gmail.com"
                  placeholderTextColor={platinum}
                  onChangeText={value => handleChangeInput('email', value)}
                  style={{
                    fontFamily: 'Manrope-Regular',
                  }}
                />
              </View>
            </View>
            <View className="mt-14 mb-10">
              {state.isEditable ? (
                <TouchableHighlight
                  className="mt-4 bg-blueberry py-4 rounded-full w-full justify-center items-center"
                  onPress={() => {
                    showToast();
                    handleChangeInput('isEditable', false);
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Manrope-Bold',
                    }}
                    className="text-xl text-white">
                    Guardar cambios
                  </Text>
                </TouchableHighlight>
              ) : (
                <>
                  <TouchableHighlight
                    style={{
                      borderWidth: 1,
                    }}
                    className="bg-white border-turquoise py-4 rounded-full w-full justify-center items-center"
                    onPress={() => {}}>
                    <Text
                      style={{
                        fontFamily: 'Manrope-Bold',
                      }}
                      className="text-xl text-turquoise">
                      Cambiar a Proveedor
                    </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    className="mt-4 bg-platinum py-4 rounded-full w-full justify-center items-center"
                    onPress={() => {
                      logout();
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Manrope-Bold',
                      }}
                      className="text-xl text-white">
                      Cerrar sesión
                    </Text>
                  </TouchableHighlight>
                </>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default UserProfileScreen;

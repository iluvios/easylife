import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import ModalComponent from '../components/modal';
import IconImageComponent from '../components/iconImage';
import HomeOutline from '../assets/icons/home-outline.png';
import NotchImage from '../assets/images/notch.png';
import MoneySmallImage from '../assets/icons/money-small.png';
import ArrowLeftIcon from '../assets/icons/arrow-left.png';
import LocationSmallWhiteIcon from '../assets/icons/location-small-white.png';
import LocationAddIcon from '../assets/icons/location-add.png';
import CardAddIcon from '../assets/icons/card-add.png';
import ArrowBottomBigIcon from '../assets/icons/arrow-bottom-big.png';
import ConduccionImage from '../assets/images/services/conductor.png';
import TeacherIcon from '../assets/icons/teacher-small.png';
import LocationIcon from '../assets/icons/location-small.png';
import MoneyIcon from '../assets/icons/money-small.png';
import {StackActions} from '@react-navigation/native';
import {requestService, schedule} from '../util/const';
import {platinum} from '../assets/styles/const';

const popAction = StackActions.pop(1);

const direcciones = [
  'Tv. 35c Sur #33-57',
  'Calle 17 c sur · 44-20',
  'Carrera 49, Cl. 7 Sur #50',
  'Cl. 36 Sur # 41 33',
];

const paymentMethods = [
  'Efectivo',
  'Débito Bancolombia',
  'Corriente BBVA',
  'Nequi',
];

const ServiceScreen = ({navigation}) => {
  const [state, setState] = useState({
    address: '',
    addressClicked: false,
    remember: '',
    rememberClicked: false,
    accountNumber: '',
    accountNumberClicked: false,
    accountName: '',
    accountNameClicked: false,
    accountLastName: '',
    accountLastNameClicked: false,
    accountExpirationDate: '',
    accountExpirationDateClicked: false,
    accountCode: '',
    accountCodeClicked: false,
  });

  const [modalState, setModalState] = useState({
    isPanelVisible: false,
    isModalVisible: false,
    isAddressContent: false,
    isPaymentMethodContent: false,
    isAddAddressContent: false,
    isAddPaymentMethodContent: false,
  });

  const handleChangeInputState = (name, value) => {
    setState({...state, [name]: value});
  };

  const handleTogglePannel = name => {
    setModalState({
      ...modalState,
      isPanelVisible: !modalState.isPanelVisible,
      isModalVisible: false,
      isAddAddressContent: name === 'isAddAddressContent' ? true : false,
      isAddPaymentMethodContent:
        name === 'isAddPaymentMethodContent' ? true : false,
    });
  };

  const handleToggleModal = name => {
    setModalState({
      ...modalState,
      isModalVisible: !modalState.isModalVisible,
      isPanelVisible: false,
      isAddressContent: name === 'isAddressContent' ? true : false,
      isPaymentMethodContent: name === 'isPaymentMethodContent' ? true : false,
    });
  };

  const renderElement = (key, name, text) => {
    return (
      <View className="flex-row items mt-5" key={key}>
        <View className="flex-row items-center">
          <Image
            source={name === 'isAddressContent' ? HomeOutline : MoneySmallImage}
          />
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
              maxWidth: 246,
            }}
            className="ml-3 text-chineseblack text-xl">
            {text}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Manrope-Regular',
          }}
          className="text-blueberry text-lg absolute right-1">
          Editar
        </Text>
      </View>
    );
  };

  const renderModalContent = () => {
    if (modalState.isAddressContent) {
      return (
        <View>
          <Text
            style={{
              fontFamily: 'Comfortaa-Bold',
            }}
            className="mt-8 text-black text-xl">
            Selecciona una dirección
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-platinum text-lg">
            Aquí llegará el easy de tu servicio
          </Text>
          <View className="mb-10">
            {direcciones.map((address, key) =>
              renderElement(key, 'isAddressContent', address),
            )}
          </View>
          <View className="flex-row justify-center items-center mb-8">
            <Image source={LocationAddIcon} />
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              onPress={() => {
                handleTogglePannel('isAddAddressContent');
              }}
              className="ml-3 text-blueberry text-xl">
              Añadir dirección
            </Text>
          </View>
        </View>
      );
    }

    if (modalState.isPaymentMethodContent) {
      return (
        <View>
          <Text
            style={{
              fontFamily: 'Comfortaa-Bold',
            }}
            className="mt-8 text-black text-xl">
            Cómo quieres pagar?
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-platinum text-lg">
            Selecciona de donde saldrá el pago
          </Text>
          <View className="mb-10">
            {paymentMethods.map((paymentMethod, key) =>
              renderElement(key, 'isPaymentMethodContent', paymentMethod),
            )}
          </View>
          <View className="flex-row justify-center items-center mb-8">
            <Image source={CardAddIcon} />
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              onPress={() => {
                handleTogglePannel('isAddPaymentMethodContent');
              }}
              className="ml-3 text-blueberry text-xl">
              Añadir cuenta
            </Text>
          </View>
        </View>
      );
    }
  };

  const renderPanelContent = () => {
    if (modalState.isAddAddressContent) {
      return (
        <View className="mt-12">
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
            }}
            className="text-center text-blue text-3xl text-blueberry">
            Nueva dirección
          </Text>
          <View className="ml-3 mt-5">
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              className="text-chineseblack text-xl ">
              Ingresa tú nueva ubicación
            </Text>
            <View
              className={`mt-10 flex flex-row justify-center items-start appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline h-12 mr-3 ${
                state.addressClicked ? 'border-blueberry' : 'border-platinum'
              }`}>
              <View className="flex-row justify-center items-center">
                <View className="ml-3 mr-2">
                  <IconImageComponent
                    image={LocationSmallWhiteIcon}
                    height={20}
                    width={20}
                  />
                </View>
                <TextInput
                  onFocus={() => handleChangeInputState('addressClicked', true)}
                  onBlur={() => handleChangeInputState('addressClicked', false)}
                  keyboardType="ascii-capable"
                  multiline={true}
                  className="text-sm flex-1 text-black"
                  placeholder="Dirección"
                  placeholderTextColor={platinum}
                  onChangeText={value =>
                    handleChangeInputState('address', value)
                  }
                  style={{
                    fontFamily: 'Manrope-Regular',
                  }}
                />
              </View>
            </View>
            <View
              className={`mt-5 flex flex-row justify-center items-start appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline h-20 mr-3 ${
                state.rememberClicked ? 'border-blueberry' : 'border-platinum'
              }`}>
              <TextInput
                onFocus={() => handleChangeInputState('rememberClicked', true)}
                onBlur={() => handleChangeInputState('rememberClicked', false)}
                keyboardType="ascii-capable"
                multiline={true}
                className="text-sm flex-1 ml-2 text-black"
                placeholder="Nota"
                placeholderTextColor={platinum}
                onChangeText={value =>
                  handleChangeInputState('remember', value)
                }
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
              />
            </View>
            <View className="mt-10 mb-8 flex-row justify-between items-center">
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                onPress={handleTogglePannel}
                className="ml-4 text-xl text-platinum">
                Cancelar
              </Text>
              <Text
                style={{
                  fontFamily: 'Manrope-Bold',
                }}
                onPress={handleTogglePannel}
                className="mr-5 text-xl text-blueberry">
                Guardar
              </Text>
            </View>
          </View>
        </View>
      );
    }

    if (modalState.isAddPaymentMethodContent) {
      return (
        <View className="mt-12">
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
            }}
            className="text-center text-blue text-3xl text-blueberry">
            Nueva cuenta
          </Text>
          <View className="ml-3 mt-5">
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              className="text-chineseblack text-xl ">
              Ingresa tú nuevo metodo de pago
            </Text>
            <View
              className={`mt-10 flex flex-row justify-center items-start appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline h-12 mr-3 ${
                state.accountNumberClicked
                  ? 'border-blueberry'
                  : 'border-platinum'
              }`}>
              <View className="flex-row ml-3">
                <TextInput
                  onFocus={() =>
                    handleChangeInputState('accountNumberClicked', true)
                  }
                  onBlur={() =>
                    handleChangeInputState('accountNumberClicked', false)
                  }
                  keyboardType="ascii-capable"
                  multiline={true}
                  className="text-sm flex-1 text-black"
                  placeholder="Número de tarjeta"
                  placeholderTextColor={platinum}
                  onChangeText={value =>
                    handleChangeInputState('accountNumber', value)
                  }
                  style={{
                    fontFamily: 'Manrope-Regular',
                  }}
                />
              </View>
            </View>
            <View
              className={`mt-5 flex flex-row justify-center items-start appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline h-12 mr-3 ${
                state.accountNameClicked
                  ? 'border-blueberry'
                  : 'border-platinum'
              }`}>
              <View className="flex-row ml-3">
                <TextInput
                  onFocus={() =>
                    handleChangeInputState('accountNameClicked', true)
                  }
                  onBlur={() =>
                    handleChangeInputState('accountNameClicked', false)
                  }
                  keyboardType="ascii-capable"
                  multiline={true}
                  className="text-sm flex-1 text-black"
                  placeholder="Nombre"
                  placeholderTextColor={platinum}
                  onChangeText={value =>
                    handleChangeInputState('accountName', value)
                  }
                  style={{
                    fontFamily: 'Manrope-Regular',
                  }}
                />
              </View>
            </View>
            <View
              className={`mt-5 flex flex-row justify-center items-start appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline h-12 mr-3 ${
                state.accountLastNameClicked
                  ? 'border-blueberry'
                  : 'border-platinum'
              }`}>
              <View className="flex-row ml-3">
                <TextInput
                  onFocus={() =>
                    handleChangeInputState('accountLastNameClicked', true)
                  }
                  onBlur={() =>
                    handleChangeInputState('accountLastNameClicked', false)
                  }
                  keyboardType="ascii-capable"
                  multiline={true}
                  className="text-sm flex-1 text-black"
                  placeholder="Apellido"
                  placeholderTextColor={platinum}
                  onChangeText={value =>
                    handleChangeInputState('accountLastName', value)
                  }
                  style={{
                    fontFamily: 'Manrope-Regular',
                  }}
                />
              </View>
            </View>

            <View className="mt-5 flex-row items-center">
              <View
                className={`w-44 flex flex-row justify-center items-start appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline h-12 mr-3 ${
                  state.accountExpirationDateClicked
                    ? 'border-blueberry'
                    : 'border-platinum'
                }`}>
                <View className="flex-row ml-3">
                  <TextInput
                    onFocus={() =>
                      handleChangeInputState(
                        'accountExpirationDateClicked',
                        true,
                      )
                    }
                    onBlur={() =>
                      handleChangeInputState(
                        'accountExpirationDateClicked',
                        false,
                      )
                    }
                    keyboardType="ascii-capable"
                    multiline={true}
                    className="text-sm flex-1 text-black"
                    placeholder="Expira MM/AA"
                    placeholderTextColor={platinum}
                    onChangeText={value =>
                      handleChangeInputState('accountExpirationDate', value)
                    }
                    style={{
                      fontFamily: 'Manrope-Regular',
                    }}
                  />
                </View>
              </View>
              <View
                className={`w-44 flex flex-row justify-center items-start appearance-none border rounded-xl leading-tight focus:outline-none focus:shadow-outline h-12 mr-3 ${
                  state.accountCodeClicked
                    ? 'border-blueberry'
                    : 'border-platinum'
                }`}>
                <View className="flex-row ml-3">
                  <TextInput
                    onFocus={() =>
                      handleChangeInputState('accountCodeClicked', true)
                    }
                    onBlur={() =>
                      handleChangeInputState('accountCodeClicked', false)
                    }
                    keyboardType="ascii-capable"
                    multiline={true}
                    className="text-sm flex-1 text-black"
                    placeholder="Código XXX"
                    placeholderTextColor={platinum}
                    onChangeText={value =>
                      handleChangeInputState('accountCode', value)
                    }
                    style={{
                      fontFamily: 'Manrope-Regular',
                    }}
                  />
                </View>
              </View>
            </View>
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              className="mt-5 ml-2 text-base text-platinum">
              Información confidencial y segura.{' '}
              <Text className="text-blueberry">Privacidad</Text>
            </Text>

            <View className="mt-10 mb-8 flex-row justify-between items-center">
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                onPress={handleTogglePannel}
                className="ml-4 text-xl text-platinum">
                Cancelar
              </Text>
              <Text
                style={{
                  fontFamily: 'Manrope-Bold',
                }}
                onPress={handleTogglePannel}
                className="mr-5 text-xl text-blueberry">
                Guardar
              </Text>
            </View>
          </View>
        </View>
      );
    }
  };

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
              maxWidth: 323,
            }}
            className="text-3xl text-chineseblack ml-5">
            Conductor elegido
          </Text>
        </View>
        <View className="mt-12 justify-center items-center">
          <Image source={ConduccionImage} />
        </View>
        <View className="mt-5">
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-chineseblack text-lg">
            1. El conductor te llevará en tú vehiculo.
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-chineseblack text-lg mt-3">
            2. El valor del servicio cubre el máx de{' '}
            <Text
              style={{
                fontFamily: 'Manrope-Bold',
              }}>
              1 hora
            </Text>
            .
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-chineseblack text-lg mt-3">
            3. El recargo adicional por minuto es de{' '}
            <Text
              style={{
                fontFamily: 'Manrope-Bold',
              }}>
              $800
            </Text>
            .
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
            }}
            className="text-platinum text-sm">
            El valor del tiempo adicional se cargara a tu cuenta
          </Text>
        </View>
        <View className="mt-8">
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
            }}
            className="text-chineseblack text-xl">
            Detalles de solicitud
          </Text>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="mt-5 text-platinum text-lg">
            Recogida
          </Text>
          <View className="flex-row mt-3 justify-start items-center">
            <IconImageComponent image={TeacherIcon} width={24} height={24} />
            <TouchableOpacity
              onPress={() => {
                handleToggleModal('isAddressContent');
              }}>
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
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="mt-5 text-platinum text-lg">
            Destino
          </Text>
          <View className="flex-row mt-3 justify-start items-center">
            <IconImageComponent image={LocationIcon} width={17} height={20} />
            <TouchableOpacity
              onPress={() => {
                handleToggleModal('isAddressContent');
              }}>
              <View className="flex-row justify-start items-center">
                <Text
                  className="ml-3 text-chineseblack text-xl"
                  style={{
                    maxWidth: 250,
                    fontFamily: 'Manrope-Regular',
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
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="mt-5 text-platinum text-lg">
            Medio de pago
          </Text>
          <View className="flex-row mt-3 justify-start items-center">
            <IconImageComponent image={MoneyIcon} width={24} height={24} />
            <TouchableOpacity
              onPress={() => {
                handleToggleModal('isPaymentMethodContent');
              }}>
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
        </View>
        <View className="my-10 flex-row justify-between">
          <View className="flex-col">
            <TouchableHighlight
              className="bg-skyblue w-44 py-4 rounded-full flex justify-center items-center"
              onPress={() => {
                navigation.navigate(schedule);
              }}>
              <Text
                style={{
                  fontFamily: 'Manrope-Bold',
                }}
                className="text-xl text-white">
                Agendar
              </Text>
            </TouchableHighlight>
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              className="text-lg text-skyblue text-center">
              $100.000 cop
            </Text>
          </View>
          <View className="flex-col">
            <TouchableHighlight
              className="bg-blueberry w-44 py-4 rounded-full flex justify-center items-center"
              onPress={() => {
                navigation.navigate(requestService);
              }}>
              <Text
                style={{
                  fontFamily: 'Manrope-Bold',
                }}
                className="text-xl text-white">
                Solicitar ya
              </Text>
            </TouchableHighlight>
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              className="text-lg text-blueberry text-center">
              $120.000 cop
            </Text>
          </View>
        </View>
      </View>
      <ModalComponent
        isVisible={modalState.isModalVisible}
        handleBackButtonPress={handleToggleModal}
        handleBackdropPress={handleToggleModal}>
        <View className="mx-3">{renderModalContent()}</View>
      </ModalComponent>
      <Modal
        style={{
          width: '100%',
          margin: 0,
          flex: 1,
          justifyContent: 'flex-end',
        }}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={modalState.isPanelVisible}
        onBackButtonPress={handleTogglePannel}
        onBackdropPress={handleTogglePannel}>
        <View className="bg-white min-h-fit rounded-tr-3xl rounded-tl-3xl">
          <View className="mt-5 flex justify-center items-center">
            <TouchableHighlight onPress={handleTogglePannel}>
              <Image source={NotchImage} />
            </TouchableHighlight>
          </View>
          {renderPanelContent()}
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ServiceScreen;

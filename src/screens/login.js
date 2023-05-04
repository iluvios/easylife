import React, {useState, useContext} from 'react';
import {AuthContext} from '../navigation/AuthProvider';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import IconImageComponent from '../components/iconImage';
import EmailIcon from '../assets/icons/sms.png';
import LockIcon from '../assets/icons/lock.png';
import FacebookIcon from '../assets/icons/facebook.png';
import GoogleIcon from '../assets/icons/google.png';
import CellphoneIcon from '../assets/icons/cellphone.png';
import AppleIcon from '../assets/icons/apple.png';
import {platinum, blueberry} from '../assets/styles/const';
import {passwordRecovery, register} from '../util/const';

const LoginScreen = ({navigation}) => {
  const {login, setErrorMessage, handleModalVisible, setModal} =
    useContext(AuthContext);
  const [isEmailClicked, setIsEmailClicked] = useState(false);
  const [isPasswordClicked, setIsPasswordClicked] = useState(false);

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChangeInput = (name, value) => {
    setState({...state, [name]: value});
  };

  //TODO:  funcionalidad pendiente
  const handleLogin = () => {
    if (state.email !== '' && state.password !== '') {
      login(state.email, state.password);
    } else {
      setModal({
        title: 'Error de inicio de sesión',
      });
      setErrorMessage('Todos los campos son obligatorios');
      handleModalVisible();
    }
  };
  return (
    <ScrollView className="w-full bg-white">
      <View className="flex justify-center items-center mt-14">
        <Image source={require('../assets/images/logo.png')} />
      </View>
      <Text className="text-center text-3xl font-bold text-black my-10 leading-8">
        Iniciar sesión
      </Text>
      <View className="mx-3">
        <View
          className={`flex flex-row justify-center items-center shadow appearance-none border rounded-xl w-full leading-tight focus:outline-none focus:shadow-outline 
          ${isEmailClicked ? 'border-blueberry' : 'border-platinum'}`}>
          <View className="pl-4">
            <IconImageComponent
              image={EmailIcon}
              color={isEmailClicked ? blueberry : platinum}
              height={19}
              width={19}
            />
          </View>
          <TextInput
            onFocus={() => setIsEmailClicked(true)}
            onBlur={() => setIsEmailClicked(false)}
            autoCapitalize="none"
            keyboardType="email-address"
            className="text-sm flex-1 ml-2 py-3 text-black"
            placeholder="Correo electronico"
            placeholderTextColor={platinum}
            onChangeText={value => handleChangeInput('email', value)}
            style={{
              fontFamily: 'Comfortaa',
            }}
          />
        </View>
        <View
          className={`mt-5 flex flex-row justify-center items-center shadow appearance-none border rounded-md w-full leading-tight focus:outline-none focus:shadow-outline 
          ${isPasswordClicked ? 'border-blueberry' : 'border-platinum'}`}>
          <View className="pl-4">
            <IconImageComponent
              image={LockIcon}
              color={isPasswordClicked ? blueberry : platinum}
              height={19}
              width={19}
            />
          </View>
          <TextInput
            onFocus={() => setIsPasswordClicked(true)}
            onBlur={() => setIsPasswordClicked(false)}
            autoCorrect={false}
            secureTextEntry={true}
            className="text-sm flex-1 ml-3 py-3 text-black"
            placeholder="Contraseña"
            placeholderTextColor={platinum}
            onChangeText={value => handleChangeInput('password', value)}
            style={{
              fontFamily: 'Comfortaa',
            }}
          />
        </View>
        <View className="pt-6 pl-1">
          <Text
            onPress={() => navigation.navigate(passwordRecovery)}
            className="text-base text-blueberry">
            Recuperar contraseña
          </Text>
        </View>
        <TouchableHighlight
          className="bg-blueberry mt-10 py-4 rounded-full flex justify-center items-center"
          onPress={() => navigation.navigate(register)}>
          <Text className="text-xl font-bold text-white">Entrar</Text>
        </TouchableHighlight>
        <View className="mt-4 flex flex-row py-5 justify-center items-center">
          <View className="w-2/6 border-t border-x-platinum border-platinum" />
          <Text className="mx-4 text-platinum text-lg">Ingresa con</Text>
          <View className="w-2/6 border-t border-x-platinum border-platinum" />
        </View>
        <View className="flex flex-row justify-between items-center">
          <TouchableHighlight
            className="bg-white p-3 rounded-md flex justify-center items-center border-blueberry border-2 w-12 h-12"
            onPress={() => navigation.navigate(register)}>
            <IconImageComponent
              image={CellphoneIcon}
              color={blueberry}
              height={25}
              width={25}
            />
          </TouchableHighlight>
          <TouchableHighlight
            className="bg-white p-3 rounded-md flex justify-center items-center border-blueberry border-2 w-12 h-12"
            onPress={() => navigation.navigate(register)}>
            <IconImageComponent
              image={FacebookIcon}
              color={blueberry}
              height={26}
              width={13}
            />
          </TouchableHighlight>
          <TouchableHighlight
            className="bg-white p-3 rounded-md flex justify-center items-center border-blueberry border-2 w-12 h-12"
            onPress={() => navigation.navigate(register)}>
            <IconImageComponent
              image={GoogleIcon}
              color={blueberry}
              height={23}
              width={23}
            />
          </TouchableHighlight>
          <TouchableHighlight
            className="bg-white p-3 rounded-md flex justify-center items-center border-blueberry border-2 w-12 h-12"
            onPress={() => navigation.navigate(register)}>
            <IconImageComponent
              image={AppleIcon}
              color={blueberry}
              height={30}
              width={23}
            />
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          className="bg-white my-10 py-4 rounded-full flex justify-center items-center border-turquoise border-2"
          onPress={() => navigation.navigate(register)}>
          <Text className="text-xl font-bold text-turquoise">
            Soy proveedor
          </Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

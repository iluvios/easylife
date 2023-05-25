import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableHighlight} from 'react-native';
import IconImageComponent from '../components/iconImage';
import ArrowLeftIcon from '../assets/icons/arrow-left.png';
import {StackActions} from '@react-navigation/native';

const popAction = StackActions.pop(1);

const TermsScreen = ({navigation}) => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const handleOpenPolicy = () => {
    setIsPolicyOpen(true);
  };

  const handleClosePolicy = () => {
    setIsPolicyOpen(false);
  };

  return (
    <ScrollView className="bg-white">
      <View className="mx-3">
        <View className="flex flex-row items-center mt-10">
          <TouchableHighlight
            onPress={() => {
              navigation.dispatch(popAction);
            }}
            className="rounded-xl p-1 w-12 h-12 shadow-2xl shadow-blueberry bg-white flex justify-center items-center">
            <IconImageComponent image={ArrowLeftIcon} height={40} width={40} />
          </TouchableHighlight>
          <View className="flex flex-col">
            <Text
              style={{
                fontFamily: 'Comfortaa-Bold',
              }}
              className="text-xl text-black ml-5">
              Términos y condiciones
            </Text>
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
              }}
              className="text-platinum text-sm ml-5 mt-2">
              Ultima actulización: 24 Junio, 2020
            </Text>
          </View>
        </View>
        <View className="mt-10 flex flex-row justify-center items-center">
          <TouchableHighlight
            className={`${
              isPolicyOpen ? 'bg-white' : 'bg-skyblue'
            } px-2 pb-1 rounded-full flex justify-center items-center`}
            onPress={handleClosePolicy}>
            <Text
              style={{
                fontFamily: isPolicyOpen ? 'Manrope-Regular' : 'Manrope-Bold',
              }}
              className={`text-lg ${
                isPolicyOpen ? 'text-platinum' : 'text-white'
              }`}>
              Mis derechos
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            className={`${
              isPolicyOpen ? 'bg-skyblue' : 'bg-white'
            } px-2 pb-1 rounded-full flex justify-center items-center`}
            onPress={handleOpenPolicy}>
            <Text
              style={{
                fontFamily: isPolicyOpen ? 'Manrope-Bold' : 'Manrope-Regular',
              }}
              className={`text-lg ${
                isPolicyOpen ? 'text-white' : 'text-platinum'
              }`}>
              Política de privacidad
            </Text>
          </TouchableHighlight>
        </View>
        {isPolicyOpen ? (
          <View className="mt-10">
            <View>
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="text-black p-3 text-lg">
                Privacidad Nulla feugiat eget tempus mattis facilisis semper
                vitae. Nisi habitant sapien at dolor duis morbi. Nunc proin dis
                pharetra sed porttitor pulvinar neque vestibulum porta.
                Imperdiet vel id massa orci molestie consequat id semper. Nibh
                nibh sagittis viverra sed a magnis tincidunt. Amet cras dictumst
                fringilla metus.
              </Text>
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="text-black p-3 text-lg">
                Orci ipsum est sit porttitor odio ultrices aliquam id
                pellentesque. Lacinia vel gravida rutrum vestibulum. Nec id
                scelerisque et leo mi fringilla. Fermentum facilisi imperdiet
                elementum diam et egestas. At semper interdum scelerisque
                elementum velit. Id pulvinar lorem risus lacus ornare. Commodo.
              </Text>
            </View>
            <View className="bg-platinum rounded-2xl">
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="text-black p-3 text-base">
                Ornare cursus urna rutrum non non rhoncus turpis enim tortor.
                Sociis lorem tellus donec proin nisl at. Sit porttitor nec massa
                vitae et a lobortis nibh quam. Maecenas cursus et potenti libero
                id. At ut nunc neque adipiscing tincidunt nisl quis. Leo
                dictumst dui bibendum id ut eget donec. Nisl.
              </Text>
              <Text className="text-black p-3 text-base">
                Tellus a viverra mi ut amet at. In tellus purus nunc quisque
                nascetur fames. Etiam convallis placerat aliquet bibendum
                ullamcorper mauris facilisi. Ullamcorper nibh id viverra eget.
                Lectus ac netus enim nec turpis aliquam amet quisque. Et cras eu
                consectetur mi ut facilisis consequat enim.
              </Text>
            </View>
          </View>
        ) : (
          <View className="mt-10">
            <View className="bg-platinum rounded-2xl">
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="text-black p-3 text-base">
                Derechos Ornare cursus urna rutrum non non rhoncus turpis enim
                tortor. Sociis lorem tellus donec proin nisl at. Sit porttitor
                nec massa vitae et a lobortis nibh quam. Maecenas cursus et
                potenti libero id. At ut nunc neque adipiscing tincidunt nisl
                quis. Leo dictumst dui bibendum id ut eget donec. Nisl.
              </Text>
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="text-black p-3 text-base">
                Tellus a viverra mi ut amet at. In tellus purus nunc quisque
                nascetur fames. Etiam convallis placerat aliquet bibendum
                ullamcorper mauris facilisi. Ullamcorper nibh id viverra eget.
                Lectus ac netus enim nec turpis aliquam amet quisque. Et cras eu
                consectetur mi ut facilisis consequat enim.
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="text-black p-3 text-lg">
                Nulla feugiat eget tempus mattis facilisis semper vitae. Nisi
                habitant sapien at dolor duis morbi. Nunc proin dis pharetra sed
                porttitor pulvinar neque vestibulum porta. Imperdiet vel id
                massa orci molestie consequat id semper. Nibh nibh sagittis
                viverra sed a magnis tincidunt. Amet cras dictumst fringilla
                metus.
              </Text>
              <Text
                style={{
                  fontFamily: 'Manrope-Regular',
                }}
                className="text-black p-3 text-lg">
                Orci ipsum est sit porttitor odio ultrices aliquam id
                pellentesque. Lacinia vel gravida rutrum vestibulum. Nec id
                scelerisque et leo mi fringilla. Fermentum facilisi imperdiet
                elementum diam et egestas. At semper interdum scelerisque
                elementum velit. Id pulvinar lorem risus lacus ornare. Commodo.
              </Text>
            </View>
          </View>
        )}
        <TouchableHighlight
          className="bg-skyblue my-10 py-4 rounded-full flex justify-center items-center w-full"
          onPress={() => {}}>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
            }}
            className="text-xl text-white">
            Aceptar
          </Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

export default TermsScreen;

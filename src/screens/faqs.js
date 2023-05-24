import React, {useState} from 'react';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native';
import IconImageComponent from '../components/iconImage';
import ArrowLeftIcon from '../assets/icons/arrow-left.png';
import {StackActions} from '@react-navigation/native';
const popAction = StackActions.pop(1);

const questions = [
  {
    id: 1,
    question: 'Adipiscing tellus',
    description: 'Consequat nisi enim est pulvinar. Dui vitae urna.',
  },
  {
    id: 2,
    question: 'Diam commodo',
    description: 'Adipiscing quam nisi senectus amet penatibus vel.',
  },
  {
    id: 3,
    question: 'Nunc scelerisque',
    description: 'Enim pretium malesuada est ac dui volutpat. Morbi.',
  },
  {
    id: 4,
    question: 'Dictumst amet',
    description: 'Viverra fames proin sit in tortor in vestibulum elit.',
  },
  {
    id: 5,
    question: 'Ultrices vitae',
    description: 'Pellentesque elit consequat lacinia ultricies sed.',
  },
];
const FaqsScreen = ({navigation}) => {
  const [categoriesState, setCategoriesState] = useState({
    todas: {
      state: true,
      label: 'Todas',
    },
    servicios: {
      state: false,
      label: 'Servicios',
    },
    pagos: {
      state: false,
      label: 'Pagos',
    },
    proveedores: {
      state: false,
      label: 'Proveedores',
    },
  });

  const renderQuestion = ({id, question, description}) => {
    return (
      <View
        key={id}
        className="p-3 shadow-sm shadow-sm mb-5 rounded-3xl"
        style={{
          backgroundColor: 'rgba(181, 181, 181, 0.3)',
        }}>
        <Text
          style={{
            fontFamily: 'Manrope-Bold',
          }}
          className="text-chineseblack text-xl">
          {question}
        </Text>
        <Text
          style={{
            fontFamily: 'Manrope-Regular',
          }}
          className="mt-3 text-chineseblack text-base">
          {description}
        </Text>
      </View>
    );
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
            }}
            className="text-3xl text-chineseblack ml-5">
            FAQs
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Manrope-Bold',
          }}
          className="mt-12 text-chineseblack text-xl">
          Preguntas? tenemos <Text className="text-blueberry">respuestas</Text>{' '}
          al instante
        </Text>
        <View className="mt-5">
          <ScrollView horizontal={true}>
            {Object.keys(categoriesState).map(key => (
              <View
                key={key}
                className={`border-turquoise rounded-3xl mr-3 ${
                  categoriesState[key].state ? 'bg-turquoise' : 'bg-white'
                }`}
                style={{
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    fontFamily: categoriesState[key].state
                      ? 'Manrope-Bold'
                      : 'Manrope-Regular',
                  }}
                  className={`text-lg px-4 text-center ${
                    categoriesState[key].state ? 'text-white' : 'text-turquoise'
                  }`}>
                  {categoriesState[key].label}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View className="mt-10">
          {questions.map(question => renderQuestion(question))}
        </View>
      </View>
    </ScrollView>
  );
};

export default FaqsScreen;

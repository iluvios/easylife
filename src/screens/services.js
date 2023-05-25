import React from 'react';
import {Text, View, ScrollView, TouchableHighlight} from 'react-native';
import CardWithIcon from '../components/cardWithIcon';
import {Services} from '../util/const';
import {programming} from '../util/const';

const ServicesScreen = ({navigation}) => {
  const columns = 3;
  const rows = Math.ceil(Services.length / columns);
  const rowsArr = Array.from(Array(rows)).map((_, i) => i);

  return (
    <View className="bg-white h-full w-full">
      <View className="h-full">
        <Text
          style={{
            fontFamily: 'Comfortaa-Bold',
          }}
          className="mt-10 text-3xl text-chineseblack text-center">
          Servicios
        </Text>
        <View className="mt-5">
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
            }}
            className="text-platinum text-lg ml-3">
            Cómo ayudaremos al mundo?
          </Text>
          <ScrollView className="mt-10 h-4/6">
            <View className="flex-row">
              {[...Array(columns)].map((_, j) => (
                <View key={j} style={{flex: 1}}>
                  {rowsArr.map(i => {
                    const service = Services[i * columns + j];
                    if (!service) {
                      return null;
                    }
                    return (
                      <CardWithIcon
                        navigate={programming}
                        key={service.id}
                        image={service.image}
                        title={service.title}
                        isLast={false}
                      />
                    );
                  })}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <View className="mx-3">
        <TouchableHighlight
          className="w-full bg-blueberry py-4 rounded-full absolute bottom-10 justify-center items-center"
          onPress={() => {}}>
          <Text
            style={{
              fontFamily: 'Manrope-Bold',
            }}
            className="text-xl text-white">
            Confirmar
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ServicesScreen;

import React from 'react';
import {Text, View} from 'react-native';
import * as Progress from 'react-native-progress';

const LoadingComponent = () => {
  return (
    <View className="bg-grayLight w-full h-full flex justify-center items-center">
      <Progress.Circle
        size={60}
        indeterminate={true}
        color="#3b82f6"
        borderWidth={2.5}
      />
      <Text className="ml-4 text-blue text-lg">Cargando...</Text>
    </View>
  );
};

export default LoadingComponent;

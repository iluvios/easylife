import React from 'react';
import {View, Image} from 'react-native';

const IconImageComponent = ({image, height, width, color}) => {
  return (
    <View>
      <Image
        source={image}
        style={{height: height, width: width, tintColor: color}}
      />
    </View>
  );
};

export default IconImageComponent;

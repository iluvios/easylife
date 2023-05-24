import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

const ModalComponent = ({
  children,
  isVisible,
  handleBackdropPress,
  handleBackButtonPress,
}) => {
  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      isVisible={isVisible}
      onBackdropPress={handleBackdropPress}
      onBackButtonPress={handleBackButtonPress}>
      <View className="bg-white rounded-2xl">{children}</View>
    </Modal>
  );
};

export default ModalComponent;

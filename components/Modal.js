import React from 'react';
import { Modal, TouchableHighlight, View } from 'react-native';

export const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);

  setOpenModal({ openModal: visible });

  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={openModal}>
        <View>
          <Text>Name of restaurant</Text>
          <TouchableHighlight>
            onPress=
            {() => {
              setOpenModal(!openModal);
            }}
            <Text>Hide modal</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
};

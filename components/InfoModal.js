import React from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

export const InfoModal = () => {


  const [modalVisible, setModalVisible] = useState(false)

  setModalVisible(visible)


  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
}


export default InfoModal


// import React, { useState } from 'react-native';
// import Modal from 'react-native-modal';
// import { View, Text } from 'react-native';

// export const InfoModal = () => {
//   return (
//     <View>
//       <View>
//         <Text>hello</Text>
//       </View>
//     </View>
//   );
// };

// export default InfoModal;

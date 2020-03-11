import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export const Callout = props => {
  const { name, phone, address, note, website } = props.marker;

  const navigation = useNavigation();

  const handleWebsitePress = webId => {
    const webpage = markers.find(p => p.id === webId);
    return Linking.openURL(webpage.website);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textName}>{name}</Text>

      <Text style={styles.phone}>
        <Icon name="phone" size={20} color="red" /> {phone}
      </Text>
      <Text>{address}</Text>
      <Text style={styles.note}>{note}</Text>
      <TouchableOpacity onPress={() => handleWebsitePress()}>
        <Text style={styles.text}> {website}</Text>
      </TouchableOpacity>
      <Button
        title="More Info"
        onPress={() => navigation.navigate('Comment')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {},
  container: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'column',
    width: 250,
    height: 150
  },
  textName: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18
  },
  text: {
    color: 'red'
  },
  note: {
    color: 'red'
  },
  phone: {
    color: 'red'
  },
  phoneIcon: {
    width: 1,
    height: 1,
    overlayColor: 'red'
  }
});

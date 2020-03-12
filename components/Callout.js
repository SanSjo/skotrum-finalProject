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
      <Text style={styles.textName}>{marker.name}</Text>

      <Text style={styles.phone}>
        <Icon name="phone" size={20} color="red" />
        {'  '}
        {marker.phone}
      </Text>
      <Text style={styles.adress}>
        <Icon style={styles.icon} name="envelope" size={15} color="red" />
        {'  '}
        {marker.address}
      </Text>
      <Text style={styles.note}>
        <Icon name="check" size={20} color="red" /> {marker.note}
      </Text>
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
    width: 270,
    height: 170
  },
  textName: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 10
  },
  text: {
    color: 'red',
    paddingBottom: 10
  },
  note: {
    color: 'red',
    paddingBottom: 10
  },
  phone: {
    color: 'red',
    paddingBottom: 10
  },

  adress: {
    color: 'red',
    paddingBottom: 10
  },
  icon: {}
});

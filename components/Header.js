import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

export const Header = () => {
  const navigation = useNavigation();
  return (
    <Appbar.Header style={styles.container}>
      <Image
        style={styles.logo}
        size={5}
        source={require('../assets/logomini-app.jpg')}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          title="Göteborg"
          onPress={() => navigation.navigate('Gbg')}
        >
          <Text style={styles.button}>Göteborg</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="Malmö"
          onPress={() => navigation.navigate('Malmo')}
        >
          <Text style={styles.button}>Malmö</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="Stockholm"
          onPress={() => navigation.navigate('Stockholm')}
        >
          <Text style={styles.button}>Stockholm</Text>
        </TouchableOpacity>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: 70
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    color: 'red',
    marginLeft: 20,
    fontSize: 20
  },
  logo: {
    borderRadius: 14,
    marginLeft: 10
  }
});

import React from 'react';
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import styled from 'styled-components';
import { Gbg } from './Gbg';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <Button
          style={styles.button}
          title="Malmö"
          onPress={() => navigation.navigate('Malmo')}
        >
          Malmö
        </Button>

        <Button
          style={styles.button}
          title="Göteborg"
          onPress={() => navigation.navigate('Gbg')}
        >
          Göteborg
        </Button>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 70
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 120
  },
  button: {
    color: 'white'
  },
  logo: {
    borderRadius: 14,
    marginLeft: 10
  }
});

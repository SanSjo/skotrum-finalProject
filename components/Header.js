import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Gbg } from './Gbg';

export const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Malmö"
        onPress={() => navigation.navigate('Malmö')}
      ></Button>

      <Button
        style={styles.button}
        title="Göteborg"
        onPress={() => navigation.navigate('Gbg')}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent'
  }
});

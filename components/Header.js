import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import styled from 'styled-components';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Malmö"
        onPress={() => navigation.navigate('Malmo')}
      ></Button>
      <Button
        style={styles.button}
        title="Göteborg"
        onPress={() => navigation.navigate('Goteborg')}
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

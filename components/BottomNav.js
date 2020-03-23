import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export const BottomNav = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Info')}>
          <Icon name="info-circle" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CommentPage')}>
          <Icon name="comment" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  bottomNav: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f64861'
  }
});

import React, { useState } from 'react';
import { Button, View, TextInput, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Styled from 'styled-components/native';

import { CommentForm } from './CommentForm';
import { CommentHeader } from './CommentHeader';

export const Comment = ({ navigation }) => {
  return (
    <View>
      <CommentHeader />
      <CommentForm />

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Comment;

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     width: 400
//   },
//   text: {
//     fontSize: 20,
//     marginTop: 10,
//     width: 200
//   },
//   input: {
//     backgroundColor: 'white',
//     width: 200
//   }
// });
/*
return (
    <View>
      <Text>Leave a comment</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );

  /*{' '}
      <Input
        type="text"
        multiline
        numberOfLines={3}
        value={comment}
        onChange={text => setComment(text)}
      />{' '}
      */

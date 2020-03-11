import React, { useState, useEffect } from 'react';
import { Button, View, TextInput, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Styled from 'styled-components/native';

import { CommentForm } from './CommentForm';
import { CommentHeader } from './CommentHeader';

export const Comment = ({ navigation }) => {
  const [comment, setComment] = useState([]);
  const [postComment, setPostComment] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(res => res.json())
      .then(json => {
        setComment(json);
      })
      .catch(error => {
        console.log('Api call error');
        alert(error.message);
        throw error;
      });
  }, [postComment]);

  const handleSubmit = ({ event, comment }) => {
    event.preventDefault();
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' }
    })
      .catch(error => {
        console.log('error:' + error.message);
        alert('try again');
        throw error;
      })
      .then(() => {
        setPostComment(message);
      });
  };

  return (
    <View>
      <CommentHeader />
      <>
        <View style={styles.container}>
          <Text style={styles.text}>
            What do you think about this babyroom?
          </Text>
          <Text style={styles.text}>Inform other parents</Text>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={3}
            value={comment}
            onChange={text => setComment(text)}
          />

          <Button
            title="Send Comment"
            onPress={handleSubmit}
            //disabled={comment.length < 5 || comment.length > 140 ? true : false}
          ></Button>
        </View>

        {comment.map(comm => (
          <CommentForm key={comm._id} comm={comments} />
        ))}
      </>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20
  },
  text: {
    fontSize: 20,
    paddingBottom: 10
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    height: 40
  }
});

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

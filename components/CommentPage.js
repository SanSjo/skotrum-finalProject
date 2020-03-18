import React, { useState, useEffect } from 'react';
import { Button, View, TextInput, Text, StyleSheet, Share } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Styled from 'styled-components/native';

import { CommentForm } from './CommentForm';
import { CommentHeader } from './CommentHeader';
import { Comments } from './Comments'

export const CommentPage = ({ route }) => {
  const [comments, setComments] = useState([]);
  const [postComment, setPostComment] = useState('');


  useEffect(() => {
    fetch(`https://babyrooms.herokuapp.com/`)
      .then(res => res.json())
      .then(json => {
        setComments(json);
      })
      .catch(error => {
        console.log('Api call error');
        alert(error.message);
        throw error;
      });
  }, [postComment]);

  const onFormSubmit = message => {
    setPostComment(message)
  }

  const onLiked = commentId => {
    const updatedComments = comments.map(comment => {
      if (comment._id === commentId) {
        comment.like += 1
      }
      return comment
    })
    setComments(updatedComments)
  }

  // const handleSubmit = ({ event, comments }) => {
  //   event.preventDefault();
  //   fetch(URL, {
  //     method: 'POST',
  //     body: JSON.stringify({ comments }),
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //     .catch(error => {
  //       console.log('error:' + error.message);
  //       alert('try again');
  //       throw error;
  //     })
  //     .then(() => {
  //       setPostComment(comments);
  //     });
  // };

  // console.log('route', route);
  // const onShare = async () => {
  //   try {
  //     const result = await Share.share({
  //       message: 'Här finns det skötbord'
  //     });

  //     if (result.action === Share.sharedAction) {
  //       if (result.activityType) {
  //         // shared with activity type of result.activityType
  //       } else {
  //         // shared
  //       }
  //     } else if (result.action === Share.dismissedAction) {
  //       // dismissed
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };





  return (
    <View>
      <CommentHeader />
      <>
        <View style={styles.container}>
          <CommentForm onFormSubmit={onFormSubmit} />
        </View>
        {comments.map(comment => (
          <Comments key={comment._id} comment={comment} onLiked={onLiked} />
        ))}
      </>
      {/* <Button onPress={onShare} title="Share" /> */}
    </View>
  );
};

export default CommentPage;

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

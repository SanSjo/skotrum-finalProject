import React, { useState, useEffect } from 'react';
import { Button, View, TextInput, Text, StyleSheet, Share } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Styled from 'styled-components/native';
import { ListItem } from 'react-native-elements'
import { CommentForm } from './CommentForm';
import { CommentHeader } from './CommentHeader';
import { Comments } from './Comments'
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card, Avatar, IconButton } from 'react-native-paper'

export const CommentPage = () => {
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





  return (
    <ScrollView>




      <View style={styles.container}>
        <CommentForm onFormSubmit={onFormSubmit} />
      </View>
      {comments.map(comment => (
        <>
          <View style={styles.cardContainer}>
            <Card.Title titleStyle={{ fontSize: 14, width: 300 }}
              title={`${comment.comment}`}
              subtitle={moment(comment.createdAt).fromNow()}
              left={(props) => <Avatar.Icon style={{ backgroundColor: '#f64861' }} {...props} icon="message" />}

            />


          </View>


        </>
      ))}


      {/* <Button onPress={onShare} title="Share" /> */}

    </ScrollView>
  );
};

export default CommentPage;
// <Comments key={comment._id} com={comment} onLiked={onLiked} />
const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,

  },
  messContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    backgroundColor: 'whitesmoke',
    padding: 10,
    borderRadius: 10,
    height: 100,
    width: 300

  },
  cardContainer: {
    backgroundColor: 'white',
    margin: 10
  },

  text: {
    fontSize: 20,
    paddingBottom: 10
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    height: 40,

  },
  commentContainer: {
    margin: 10,
    padding: 5,
    backgroundColor: 'grey',
    width: 300,
    borderRadius: 16,
  },
  message: {
    flexDirection: 'row'

  },
  icon: {
    marginLeft: 30
  },
  commentText: {
    marginLeft: 20,
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 1,
    width: 100

  },
  time: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  timeText: {

    paddingRight: 20,
    width: 120
  }
});

{/* <Card containerStyle={{ shadowColor: 'red', borderRadius: 16 }}>
  <View style={styles.container}>
    <CommentForm onFormSubmit={onFormSubmit} />
  </View>
  {comments.map(comment => (
    <>
      <View style={styles.messContainer}>
        <View style={styles.message} key={comment._id}>
          <Icon style={styles.icon} name="comment" size={30} color='red' />
          <Text style={styles.commentText}>{comment.comment}</Text>

        </View>
        <View style={styles.time}>
          <Text style={styles.timeText}>{moment(comment.createdAt).fromNow()}</Text>
        </View>


      </View>


    </>
  ))}
</Card> */}


/////////////

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

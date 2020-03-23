import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { CommentForm } from './CommentForm';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';

import { Card, Avatar } from 'react-native-paper';

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
    setPostComment(message);
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <CommentForm onFormSubmit={onFormSubmit} />

          {comments.map(comment => (
            <View key={comment._id} style={styles.cardContainer}>
              <Card.Title
                titleStyle={{
                  fontSize: 14,
                  width: 300,
                  height: 50,
                  marginLeft: -10
                }}
                title={`${comment.comment}`}
                subtitleStyle={{ marginLeft: -10 }}
                subtitle={moment(comment.createdAt).fromNow()}
                left={props => (
                  <Avatar.Icon
                    style={{ backgroundColor: '#f64861', marginLeft: -5 }}
                    {...props}
                    icon="message"
                  />
                )}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default CommentPage;
// <Comments key={comment._id} com={comment} onLiked={onLiked} />
const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
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
    height: 40
  },
  commentContainer: {
    margin: 10,
    padding: 5,
    backgroundColor: 'grey',
    width: 300,
    borderRadius: 16
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
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  timeText: {
    paddingRight: 20,
    width: 120
  }
});

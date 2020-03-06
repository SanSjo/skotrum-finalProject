import React, { useState } from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';

export const CommentForm = props => {
  const [comment, setComment] = useState('');
  const [placeInfo, setPlaceInfo] = useState(props);

  const handleSubmit = event => {
    event.preventDefault();
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        setComment('');
      })
      .catch(err => console.log('error', err));
  };

  return (
    <>
      <View styel={styles.container}>
        <Text>{placeInfo.name}</Text>
        <Text>Comment the babyroom</Text>
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
    </>
  );
};

export default CommentForm;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 200,
    backgroundColor: 'white'
  }
});

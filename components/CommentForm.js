import React, { useState } from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';

export const CommentForm = props => {
  const { message, like, createdAt, _id } = props.comments;

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export default CommentForm;

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

{
  /* <>
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
</> */
}

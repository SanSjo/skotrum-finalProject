import React, { useState } from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';

export const CommentForm = props => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`https://babyrooms.herokuapp.com/`, {
      method: 'POST',
      body: JSON.stringify({ comment, email, name }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        setComment('');
        props.onFormSubmit(comment);
        console.log(comment);
      })
      .catch(error => {
        console.log('error:' + error.comment);
        alert('try again');
        throw error;
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tyck till om Skötrumskartan</Text>

      <View style={styles.inputContainer}>
        <Text>Namn:</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={3}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={3}
          value={email}
          onChangeText={email => setEmail(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Meddelande:</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={3}
          onChangeText={text => setComment(text)}
        />
      </View>

      <Text style={styles.textSmall}>
        Ditt meddelande kommer visas anonymt{' '}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Send Comment"
          onPress={handleSubmit}
          //disabled={comment.length < 5 || comment.length > 140 ? true : false}
        >
          <Text>SKICKA</Text>
        </Button>
      </View>
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
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 16,
    paddingTop: 8,
    paddingLeft: 10,
    justifyContent: 'center',
    fontSize: 18
  },
  textSmall: {
    fontSize: 12,
    width: 250
  },
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#f64861',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 16,
    margin: 20
  },
  buttonText: {
    color: 'white',
    padding: 10,
    fontSize: 20
  }
});

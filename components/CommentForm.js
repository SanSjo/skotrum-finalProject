import React, { useState } from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export const CommentForm = (props) => {
  // const { message, like, createdAt, _id } = props.comments;
  const [comment, setComment] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://babyrooms.herokuapp.com/`, {
      method: "POST",
      body: JSON.stringify({comment}),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        setComment('')
        setEmail('')
        setName('')
        props.onFormSubmit(comment)
      })
      .catch(error => {
        console.log('error:' + error.comment);
        alert('try again');
        throw error;
      })
    }


    return (
      <View style={styles.container}>
        <Text style={styles.text}>Let us know your thoughts. </Text>
       
       <View style={styles.inputContainer}>
          <Text>Name:</Text>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={3}
            onChangeText={text => setName(text)}
          />
       </View>
        

        <View style={styles.inputContainer}>
          <Text>Email:</Text>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={3}
            onChangeText={text => setEmail(text)}
          />
        </View>
        

        <View style={styles.inputContainer}>
          <Text>Message:</Text>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={3}
            onChangeText={text => setComment(text)}
          />
        </View>
      
       
        <Text style={styles.textSmall}>Your shown message will be anonymous. </Text>
        <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.button}
          title="Send Comment"
          onPress={handleSubmit}
        //disabled={comment.length < 5 || comment.length > 140 ? true : false}
        ><Text style={styles.buttonText}>Send comment</Text></TouchableHighlight>
        </View>

        {/* <Text>{message}</Text> */}
      </View>
    );
  };

  export default CommentForm




  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 20
    },
    text: {
      fontSize: 20,
      paddingBottom: 10
    },
    inputContainer: {
      marginTop: 10
    },
    input: {
      backgroundColor: 'white',
      width: 300,
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 16,
   
    },
    textSmall: {
      fontSize: 12
    },
    buttonContainer: {
      alignItems: 'center'
    },
    button: {
      backgroundColor: 'red',
      alignItems: 'center',
      width: 200,
      borderRadius: 16,
      margin: 20
    },
    buttonText: {
      color: 'white',
      padding: 10,
     
    }
  });

/////////////


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


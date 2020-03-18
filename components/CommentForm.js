import React, { useState } from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';

export const CommentForm = (props) => {
  // const { message, like, createdAt, _id } = props.comments;
  const [comment, setComment] = useState('')


  // const getCircularReplacer = () => {
  //   const seen = new WeakSet();
  //   return (key, value) => {
  //     if (typeof value === comment && value !== null) {
  //       if (seen.has(value)) {
  //         return;
  //       }
  //       seen.add(value);
  //     }
  //     return value;
  //   };
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch('https://babyrooms.herokuapp.com/', {
  //     method: "POST",
  //     body: JSON.stringify(getCircularReplacer()),
  //     headers: { "Content-Type": "application/json" }
  //   })
  //     .then(() => {
  //       setComment('')
  //       props.onFormSubmit(comment)
  //     })
  //     .catch(error => {
  //       console.log('error:' + error.message);
  //       alert('try again');
  //       throw error;
  //     })
  // };

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === comment && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://babyrooms.herokuapp.com/`, {
      method: "POST",
      body: JSON.stringify(getCircularReplacer()),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        setComment('')
        props.onFormSubmit(comment)
      })
      .catch(error => {
        console.log('error:' + error.comment);
        alert('try again');
        throw error;
      })
    }


    return (
      <View>
        <Text style={styles.text}>Let us know your thoughts</Text>
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

        {/* <Text>{message}</Text> */}
      </View>
    );
  };





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


import React from 'react'
import { StyleSheet, Text, View, Footer, Button } from 'react-native'
import moment from 'moment'

export const Comments = (props) => {
  const { comment, like, createdAt, _id } = props.com

  const handleClick = () => {
    fetch(`https://babyrooms.herokuapp.com/${_id}/like`, {
      method: 'POST',
      body: "",
      headers: { 'Content-Type': 'application/json' }
    }).then(() => props.onLiked(_id))
  }

  return (
    <View>
      <Text>{comment}</Text>
      <View style={styles.container}>
        <View style={styles.heartContainer}>
          <Button title="heart" like={like} onPress={handleClick}>
            <Text>❤️</Text>
          </Button>
          <Text>x {like}</Text>
        </View>
        <Text>{moment(createdAt).fromNow()}</Text>
      </View>
    </View>
  )

}

export default Comments

const styles = StyleSheet.create({

})
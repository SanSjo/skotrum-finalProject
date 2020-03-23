import React from 'react';
import { StyleSheet, View } from 'react-native';
import moment from 'moment';
import { ListItem } from 'react-native-elements';

export const Comments = props => {
  const { comment, like, createdAt, _id } = props.com;

  const handleClick = () => {
    fetch(`https://babyrooms.herokuapp.com/${_id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => props.onLiked(_id));
  };

  return (
    <>
      <View>
        <ListItem key={_id} title={comment} />
        <ListItem title={moment(createdAt).fromNow()} />
      </View>
    </>
    // <View style={styles.container}>
    //   <View style={styles.commentContainer}>
    //     <Text style={styles.comment}>{comment}</Text>

    //     {/* <View style={styles.heartContainer}>
    //       <Button title="heart" like={like} onPress={handleClick}>
    //         <Text>❤️</Text>
    //       </Button>
    //       <Text>x {like}</Text>
    //     </View> */}
    //     <View style={styles.created}>
    //       <Text style={styles.createdAt}>{moment(createdAt).fromNow()}</Text>
    //     </View>
    //   </View>

    // </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  commentContainer: {
    alignItems: 'center',
    margin: 10,
    padding: 5,
    backgroundColor: 'white',
    width: 300,
    borderRadius: 16
  },
  comment: {
    paddingBottom: 20
  },
  created: {},
  createdAt: {
    justifyContent: 'flex-end'
  }
});

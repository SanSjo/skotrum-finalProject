import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const CommentHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Leave a comment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: 200,
    marginLeft: 130
  },
  text: {
    width: 200,
    textTransform: 'uppercase'
  }
});

// const View = Styled.Text`
//   display: flex;
//   justify-Content: center;
//   width: 500px;
// `;

// const Text = Styled.Text`
//   font-size: 20px;
// `;

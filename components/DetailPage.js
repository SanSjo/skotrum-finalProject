import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon, TouchableOpacity } from 'react-native-elements'
import Communications from 'react-native-communications'


export const DetailPage = ({ route }) => {

  return (
    <View>


      <Card
        title={`${route.params.name}`}
      >


        <Button title={`Call ${route.params.name}`} onPress={() => Communications.phonecall(route.params.phone, true)} style={{ marginBottom: 10 }}>
          <Text>{route.params.phone}</Text>
        </Button>
        <Text style={styles.header}>Adress:</Text>
        <Text style={{ marginBottom: 10 }}>{route.params.address}  </Text>
        <Text style={{ marginBottom: 10 }}>
          <Text style={styles.header}>Open Hours:</Text> {route.params.openHours}  </Text>
        <Text style={{ marginBottom: 10 }}>
          <Text style={styles.header}>Information:</Text> {route.params.note}  </Text>



        <Button
          onPress={() => Communications.web(route.params.website)}
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          title='Go to website' />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingBottom: 10
  },
  header: {
    fontWeight: 'bold'
  }
})
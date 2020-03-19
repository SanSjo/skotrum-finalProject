import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import Communications from 'react-native-communications'
import { TouchableHighlight, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export const DetailPage = ({ route }) => {

  return (
    <View>

      <Card
        containerStyle={{ borderRadius: 16, shadowColor: 'red' }} styleTitle={{ color: 'red' }} title={`${route.params.name}`}
      >
        <View style={styles.details}>
          <Text style={styles.adress}> <Icon name="envelope" size={20} color="#f64861" /> {' '} {route.params.address}  </Text></View>

        <View style={styles.details}><Icon style={{ marginLeft: 5 }} name="clock-o" size={20} color="#f64861" /><Text style={styles.hours}>{route.params.openHours}  </Text></View>

        <View style={styles.details}>
          <Icon style={{ marginLeft: 10 }} name="info" size={20} color="#f64861" /><Text style={styles.info}>{route.params.note}  </Text></View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} title={`Call ${route.params.name}`} onPress={() => Communications.phonecall(route.params.phone, true)} >
              <Text style={styles.buttonText}><Icon style={{ marginLeft: 10 }} name="phone" size={20} color='white' />{'   '}{route.params.phone}</Text>
            </TouchableOpacity>
            <TouchableHighlight
              style={styles.button}
              onPress={() => Communications.web(route.params.website)}
            >
              <Text style={styles.buttonText}><Icon style={{ marginLeft: 10 }} name="web" size={20} color='white' />{'  '}Go To webpage</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 50,
    borderRadius: 16,
    color: 'red'
  },
  details: {
    flexDirection: 'row',
    width: 300,

  },
  text: {
    fontSize: 20,
    paddingBottom: 10
  },
  header: {
    fontWeight: 'bold'
  },
  buttonContainer: {

  },
  buttons: {
    alignItems: 'center',
    marginTop: 50

  },
  button: {
    backgroundColor: '#f64861',
    marginBottom: 10,
    width: 200,
    height: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,


  },
  buttonText: {
    color: 'white'
  },
  adress: {
    marginBottom: 30,
    color: "#f64861",
  },
  hours: {
    marginBottom: 30,
    width: 300,
    color: "#f64861",
    paddingLeft: 10,
  },
  info: {
    marginBottom: 30,
    color: "#f64861",
    width: 300,
    marginLeft: 10,


  }
})
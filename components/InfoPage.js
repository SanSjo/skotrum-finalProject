import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon, TouchableOpacity } from 'react-native-elements'
import Communications from 'react-native-communications'
import { TouchableHighlight } from 'react-native-gesture-handler'


export const InfoPage = () => {

  return (
    <View>
      <Card containerStyle={{ borderRadius: 16, shadowColor: 'red' }}
        title="Om Skötrumskartan"
      >
        <Text style={styles.header}>En skattkarta för föräldralediga</Text>

        <Text style={styles.text}>Skötrumskartan är en karta över caféer och restauranger med skötbord i Stockholm, Göteborg och Malmö. </Text>
        <Text style={styles.text}>Appen är perfekt för föräldrar med småbarn som vill ha ett bredare utbud av platser i stan där de kan hitta skötbord och som är barnvänliga. På Skötrumskartan finns främst restauranger och café- er men det går även att hitta andra ställen som museum och bibliotek.  </Text>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() => Communications.email(['skotrumskartan@gmail.com'], null, null, 'subject', 'Fråga till skötrumskartan')}
            icon={<Icon name='question' color='#ffffff' />}
            style={styles.button}><Text style={styles.textButton}>Kontakta oss</Text>
          </TouchableHighlight>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red'
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    lineHeight: 25
  },
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#f64861',
    marginBottom: 10,
    width: 200,
    height: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16
  },
  textButton: {
    color: 'white',

  }
})

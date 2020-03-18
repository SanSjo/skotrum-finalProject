import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon, TouchableOpacity } from 'react-native-elements'
import Communications from 'react-native-communications'


export const InfoPage = () => {

  return (
    <View>
      <Card
        title="Om Skötrumskartan"
      >


        <Text style={{ marginBottom: 10 }}> Skötrumskartan är en karta med över 200 skötrum i stockholm Göteborg och Malmö... </Text>




        <Button
          onPress={() => Communications.email('skotrumskartan@gmail.com', null, 'Fråga till skötrumskartan')}
          icon={<Icon name='question' color='#ffffff' />}
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          title='Kontakta oss' />
      </Card>
    </View>
  )
}

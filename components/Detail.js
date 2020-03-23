import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import Communications from 'react-native-communications';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Detail = ({ route }) => {
  return (
    <View>
      <Card
        styleTitle={{ color: 'red' }}
        containerStyle={{ borderRadius: 16, shadowColor: 'red' }}
        styleTitle={{ color: 'red' }}
        title={`${route.params.name}`}
      >
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              title={`Call ${route.params.name}`}
              onPress={() => Communications.phonecall(route.params.phone, true)}
            >
              <Text style={styles.buttonText}>
                <Icon
                  style={{ marginLeft: 10 }}
                  name="phone"
                  size={20}
                  color="white"
                />
                {'   '}
                {route.params.phone}
              </Text>
            </TouchableOpacity>
            <TouchableHighlight
              style={styles.button}
              onPress={() => Communications.web(route.params.website)}
            >
              <Text style={styles.buttonText}>{'  '}GÅ TILL HEMSIDAN</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.details}>
            <Icon
              style={{ marginLeft: 10 }}
              name="envelope"
              size={20}
              color="#f64861"
            />
            <Text style={styles.adress}>{route.params.address} </Text>
          </View>

          <View style={styles.details}>
            <Icon
              style={{ marginLeft: 10 }}
              name="clock-o"
              size={20}
              color="#f64861"
            />
            <Text style={styles.hours}>{route.params.openHours} </Text>
          </View>

          <View style={styles.details}>
            <Icon
              style={{ marginLeft: 11 }}
              name="info"
              size={20}
              color="#f64861"
            />
            <Text style={styles.info}>{route.params.note} </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    marginBottom: 10,
    marginTop: 10
  },
  text: {
    fontSize: 20,
    paddingBottom: 10
  },
  buttons: {
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
    borderRadius: 16,
    marginBottom: 20
  },
  buttonText: {
    color: 'white'
  },
  adress: {
    marginBottom: 20,
    color: 'red',
    width: 200,
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  hours: {
    marginBottom: 20,
    width: 300,
    color: 'red',
    paddingLeft: 11,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    fontWeight: 'bold'
  },
  info: {
    marginBottom: 20,
    color: 'red',
    width: 250,
    marginLeft: 18,
    fontWeight: 'bold'
  }
});

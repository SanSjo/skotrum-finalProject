import React, { useState, useEffect, useRef } from 'react';
import MapView, { AnimatedRegion } from 'react-native-maps';
import { Text, View, StyleSheet, TouchableOpacity, Share } from 'react-native';
import Styled from 'styled-components/native';
import { Header } from './Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BottomNav } from './BottomNav';
import { useNavigation } from '@react-navigation/native';
import getDirections from 'react-native-google-maps-directions';

export const Malmo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [markers, setMarkers] = useState([]);
  const _isMounted = useRef(true);
  const region = {
    latitude: 55.60498,
    longitude: 13.003822,
    latitudeDelta: 0.12,
    longitudeDelta: 0.12
  };

  map = null;

  const controller = new AbortController();
  const signal = controller.signal;
  const navigation = useNavigation();

  let mapRef = useRef(null);

  useEffect(() => {
    fetch('https://babyrooms.herokuapp.com/malmoBabyRooms', { signal })
      .then(res => res.json())
      .then(json => {
        setIsLoading(false);
        setMarkers(json);
      });
    return () => {
      _isMounted.current = false;
    };
  }, []);

  const handleCalloutPress = selectedMarker => {
    controller.abort();
    return navigation.navigate('Detail', selectedMarker);
  };

  // Share function called in Share button in CalloutSubView
  const onShare = async marker => {
    console.log('marker', marker);
    try {
      const result = await Share.share({
        message: `Här finns det skötbord: ${marker.name} - ${marker.address}`,
        url: marker.website
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // Get direction function called in Dirucetion button in CalloutSubview

  const handleGetDirection = marker => {
    console.log(marker);
    const directionData = {
      source: {
        latitude: 0,
        longitude: 0
      },
      destination: {
        latitude: marker.latitude,
        longitude: marker.longitude
      },
      params: [
        {
          key: 'travelmode',
          value: 'walking'
        },
        {
          key: 'travelmode',
          value: 'driving'
        }
      ]
    };
    getDirections(directionData);
  };

  return (
    <Container>
      <Header navigation={navigation} />

      <MapView
        style={{ flex: 1 }}
        ref={ref => {
          mapRef.current = ref;
        }}
        showsUserLocation={true}
        zoomControlEnabled={true}
        initialRegion={region}
        showsMyLocationButton={true}
      >
        {isLoading
          ? null
          : markers
              .filter(marker => marker.latitude && marker.longitude)
              .map((marker, index) => {
                const coords = {
                  latitude: marker.latitude,
                  longitude: marker.longitude
                };

                return (
                  <MapView.Marker
                    key={index}
                    coordinate={coords}
                    title={marker.name}
                  >
                    <MapView.Callout styel={styles.callout}>
                      <View style={styles.container}>
                        <View style={styles.topCallout}>
                          <Text style={styles.textName}>{marker.name}</Text>
                          <MapView.CalloutSubview
                            onPress={() => onShare(marker)}
                          >
                            <TouchableOpacity>
                              <Icon
                                style={styles.icon}
                                name="share"
                                size={20}
                                color="red"
                              />
                              <Text style={styles.calloutButton}></Text>
                            </TouchableOpacity>
                          </MapView.CalloutSubview>
                        </View>

                        <MapView.CalloutSubview
                          onPress={() =>
                            Communications.phonecall(marker.phone, true)
                          }
                        >
                          <View style={styles.phoneCall}>
                            <Icon name="phone" size={20} color="red" />
                            <Text style={styles.phone}> {marker.phone}</Text>
                          </View>
                        </MapView.CalloutSubview>
                        <Text style={styles.adress}>
                          <Icon
                            style={styles.icon}
                            name="envelope"
                            size={15}
                            color="red"
                          />
                          {'  '}
                          {marker.address}
                        </Text>
                        <Text style={styles.note}>
                          <Icon name="check" size={20} color="red" />{' '}
                          {marker.note}
                        </Text>
                        <View style={styles.buttonContainer}>
                          <MapView.CalloutSubview
                            onPress={() => handleCalloutPress(marker)}
                          >
                            <TouchableOpacity>
                              <Text style={styles.calloutButton}>MER INFO</Text>
                            </TouchableOpacity>
                          </MapView.CalloutSubview>

                          <MapView.CalloutSubview
                            onPress={() => handleGetDirection(marker)}
                          >
                            <TouchableOpacity>
                              <Text style={styles.calloutButton}>
                                VÄGBESKRIVNING
                              </Text>
                            </TouchableOpacity>
                          </MapView.CalloutSubview>
                        </View>
                      </View>
                    </MapView.Callout>
                  </MapView.Marker>
                );
              })}
      </MapView>
      <BottomNav />
    </Container>
  );
};

export default Malmo;

const Container = Styled.View`
    flex: 1;
`;

const styles = StyleSheet.create({
  mapContainer: {},
  container: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'column',
    width: 270,
    height: 190
  },
  textName: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 10
  },
  text: {
    color: 'red',
    paddingBottom: 10
  },
  note: {
    color: 'red',
    paddingBottom: 10
  },
  phone: {
    color: 'red',
    paddingBottom: 10
  },
  adress: {
    color: 'red',
    paddingBottom: 10
  },
  callout: {
    backgroundColor: 'transparent'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    color: 'black'
  },
  phoneCall: {
    flexDirection: 'row'
  },
  calloutButton: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20
  },
  topCallout: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

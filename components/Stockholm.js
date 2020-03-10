import React, { useState, useEffect, useRef } from 'react';
import MapView from 'react-native-maps';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Styled from 'styled-components/native';
import * as Location from 'expo-location';
import { Header } from './Header';
import Icon from 'react-native-elements';
import { Comment } from './Comment';

const Container = Styled.View`
    flex: 1;
`;

export const Stockholm = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [markers, setMarkers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [location, setLocation] = useState(null);
  // const [region, setRegion] = useState({
  //   latitude: 59.329323,
  //   longitude: 18.068581,
  //   latitudeDelta: 0.015 * 5,
  //   longitudeDelta: 0.0121 * 5
  // });
  // const [latitude, setLatitude] = useState(null)
  // const [longitude, setLongitude] = useState(null)
  // let mapRef = useRef(null)

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [region, setRegion] = useState({
    latitude: 59.329323,
    longitude: 18.068581,
    latitudeDelta: 0.015,
    longitudeDelta: 0.05
  });
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(true);
  const _isMounted = useRef(true);

  useEffect(() => {
    fetch('https://babyrooms.herokuapp.com/findBabyRooms')
      .then(res => res.json())
      .then(json => {
        setIsLoading(false);
        setMarkers(json);
      });
    return () => {
      _isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        let region = {
          latitude: parseFloat(position.coord.latitude),
          longitude: parseFloat(position.coord.longitude),
          latitudeDelta: 10,
          longitudeDelta: 10
        };
        setRegion({
          initialRegion: region
        });
        // setLatitude(position.coords.latitude);
        // setLongitude(position.coords.longitude);

        // setError(null);
      },
      error => setError({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
    );
  });

  const handleCalloutPress = () => {
    return navigation.navigate('Comment', {
      name: 'name'
    });
  };

  const handleWebsitePress = () => {
    return Linking.openURL(marker.website);
  };

  return (
    <Container>
      <Header />
      <MapView
        style={{ flex: 1 }}
        showsUserLocation={true}
        zoomControlEnabled={true}
        initialRegion={region}
        showsMyLocationButton={true}
        // initialRegion={{
        //   latitude: latitude,
        //   longitude: longitude,
        //   latitudeDelta: 0.5,
        //   longitudeDelta: 0.28
        // }}
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
                const metadata = `Status: ${marker.note}`;

                return (
                  <MapView.Marker
                    key={index}
                    coordinate={coords}
                    title={marker.name}
                    description={metadata}
                    onCalloutPress={handleCalloutPress}
                  >
                    <MapView.Callout styel={styles.callout}>
                      <Container style={styles.container}>
                        <Text style={styles.textName}>{marker.name}</Text>

                        {/* <Image
                          style={styles.phoneIcon}
                          source={require('../assets/phone-icon.png')}
                        /> */}
                        <Text style={styles.phone}> {marker.phone}</Text>
                        <Text>{marker.address}</Text>
                        <Text style={styles.note}>{marker.note}</Text>
                        <TouchableOpacity onPress={() => handleWebsitePress()}>
                          <Text style={styles.text}>{marker.website}</Text>
                        </TouchableOpacity>
                      </Container>
                      <Button
                        title="More Info"
                        onPress={() => onCalloutPress()}
                      ></Button>
                    </MapView.Callout>
                  </MapView.Marker>
                );
              })}
      </MapView>
    </Container>
  );
};

export default Stockholm;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'column',
    width: 250,
    height: 150
  },
  textName: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18
  },
  text: {
    color: 'red'
  },
  note: {
    color: 'red'
  },
  phone: {
    color: 'red'
  },
  phoneIcon: {
    width: 1,
    height: 1,
    overlayColor: 'red'
  }
});

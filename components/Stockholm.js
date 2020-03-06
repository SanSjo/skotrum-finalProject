import React, { useState, useEffect, useRef } from 'react';
import MapView from 'react-native-maps';
import { Text, Button } from 'react-native';
import Styled from 'styled-components/native';
import * as Location from 'expo-location';
import { Header } from './Header';

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
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://babyrooms.herokuapp.com/findBabyRooms')
      .then(res => res.json())
      .then(json => {
        setIsLoading(false);
        setMarkers(json);
      });
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setError(null);
      },
      error => setError({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
    );
  });

  const handleCallotPress = () => {
    return navigation.navigate('Comment');
  };

  return (
    <Container>
      <Header />
      <MapView
        style={{ flex: 1 }}
        showsUserLocation
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015 * 6,
          longitudeDelta: 0.0121 * 6,
          zoom: 50
        }}
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
                const info = `Adress: ${marker.address}`;
                console.log(marker);

                return (
                  <MapView.Marker
                    key={index}
                    coordinate={coords}
                    title={marker.name}
                    description={metadata}
                    information={info}
                    onCalloutPress={handleCallotPress}
                  >
                    <MapView.Callout>
                      <Container>
                        <Text>{marker.name}</Text>
                        <Text>{marker.phone}</Text>
                        <Text>{marker.note}</Text>
                      </Container>
                      <Button title="More Info"></Button>
                    </MapView.Callout>
                  </MapView.Marker>
                );
              })}
        <Button
          title="Leave a comment"
          onPress={() => navigation.navigate('Comment')}
        ></Button>
      </MapView>
    </Container>
  );
};

export default Stockholm;

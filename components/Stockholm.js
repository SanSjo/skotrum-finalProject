import React, { useState, useEffect, useRef } from 'react';
import MapView from 'react-native-maps';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Card,
  IconButton,
  Colors,
  Share
} from 'react-native';
import Styled from 'styled-components/native';
import * as Location from 'expo-location';
import { Header } from './Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Comment } from './Comment';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Callout } from './Callout';

export const Stockholm = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [markers, setMarkers] = useState([]);

  const [error, setError] = useState(null);
  // const [openModal, setOpenModal] = useState(true);

  const _isMounted = useRef(true);

  map = null;

  const region = {
    latitude: 59.329323,
    longitude: 18.068581,
    latitudeDelta: 0.12,
    longitudeDelta: 0.12
  };

  const controller = new AbortController();
  const signal = controller.signal;

  let mapRef = useRef(null);

  useEffect(() => {
    fetch('https://babyrooms.herokuapp.com/findBabyRooms', { signal })
      .then(res => res.json())
      .then(json => {
        setIsLoading(false);
        setMarkers(json);
      });
    return () => {
      _isMounted.current = false;
    };
  }, []);

  const handleCalloutPress = () => {
    controller.abort();
    return navigation.navigate('Comment', {
      title: markers.name
    });
  };

  const getImageToShare = skotrumId => {
    const skotrum = skotrum.find(room => room.id === skotrumId);
    return skotrum.name && skotrum.address;
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Här finns det skötbord',
        url: getImageToShare()
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

  const goToCurrentLocation = () => {};

  // const handleWebsitePress = webId => {
  //   const webpage = markers.find(p => p.id === webId);
  //   return Linking.openURL(webpage.website);
  // };

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
        onCalloutPress={handleCalloutPress}
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
                    <MapView.Callout
                      style={styles.callout}
                      navigation={navigation}
                    >
                      <View style={styles.container} key={marker._id}>
                        <Text style={styles.textName}>{marker.name}</Text>

                        <Text style={styles.phone}>
                          <Icon name="phone" size={20} color="red" />
                          {'  '}
                          {marker.phone}
                        </Text>
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

                        {/* <TouchableOpacity onPress={() => handleWebsitePress()}>
                          <Text style={styles.text}> {marker.website}</Text>
                        </TouchableOpacity> */}
                        <View style={styles.buttonContainer}>
                          <Button
                            title="More info"
                            onPress={() => navigation.navigate('Comment', {})}
                          />
                          <Button
                            title="Share"
                            onPress={() => onShare(marker.id)}
                          />
                        </View>
                      </View>
                      {/* <Callout navigation={navigation} marker={marker} />*/}
                    </MapView.Callout>
                  </MapView.Marker>
                );
              })}

        {/* <Button
          title="Current Location"
          onPress={() => goToCurrentLocation()}
        ></Button> */}
      </MapView>
    </Container>
  );
};

export default Stockholm;

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
    height: 170
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
  }
});

// const [region, setRegion] = useState({
//   latitude: 59.329323,
//   longitude: 18.068581,
//   latitudeDelta: 0.12,
//   longitudeDelta: 0.12
// });

// useEffect(() => {
//   navigator.geolocation.getCurrentPosition(
//     position => {
//       let region = {
//         latitude: position.coord.latitude,
//         longitude: position.coord.longitude,
//         latitudeDelta: 10,
//         longitudeDelta: 10
//       };
//       setRegion({
//         initialRegion: region
//       });

//       ////////////
//       // setLatitude(position.coords.latitude);
//       // setLongitude(position.coords.longitude);

//       // setError(null);
//     },
//     error => setError({ error: error.message }),
//     { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
//   );
// });

// onRegionChange = region => {
//   setRegion({ region });
// };

// onMapReady = e => {
//   if (!ready) {
//     setReady(true);
//   }
// };

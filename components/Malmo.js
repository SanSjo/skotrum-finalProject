import React, { useState, useEffect, useRef } from 'react';
import MapView, { AnimatedRegion } from 'react-native-maps';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Share
} from 'react-native';
import Styled from 'styled-components/native';
import * as Location from 'expo-location';
import { Header } from './Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CommentPage } from './CommentPage';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

  const handleCalloutPress = (selectedMarker) => {
    controller.abort();
    return navigation.navigate('CommentPage', selectedMarker);
  };

  // const handleWebsitePress = webId => {
  //   const webpage = markers.find(p => p.id === webId);
  //   return Linking.openURL(webpage.website);
  // };

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

  const navigation = useNavigation();

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
                      <Text style={styles.textName}>{marker.name}</Text>

                      <Text style={styles.phone}>
                        <Icon name="phone" size={20} color="red" />
                        {'  '}
                        {marker.phone}
                      </Text>
                      <Text style={styles.adress}>
                        <Icon name="envelope" size={15} color="red" />
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
                        <MapView.CalloutSubview
                          onPress={() => handleCalloutPress(marker)}
                        >
                          <Text>MORE INFO</Text>
                        </MapView.CalloutSubview>

                        <MapView.CalloutSubview
                          onPress={() => onShare(marker)}
                        >
                          <Text>SHARE</Text>
                        </MapView.CalloutSubview>
                      </View>
                    </View>
                  </MapView.Callout>
                </MapView.Marker>
              );
            })}
        {/* <Button
          title="Current Location"
          onPress={() => handleWebsitePress()}
        ></Button> */}
      </MapView>
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
  icon: {}
});

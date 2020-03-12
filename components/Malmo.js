import React, { useState, useEffect, useRef } from 'react';
import MapView, { AnimatedRegion } from 'react-native-maps';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Styled from 'styled-components/native';
import * as Location from 'expo-location';
import { Header } from './Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Comment } from './Comment';
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

  const handleCalloutPress = () => {
    controller.abort();
    return navigation.navigate('Comment', {
      name: 'name'
    });
  };

  const handleWebsitePress = webId => {
    const webpage = markers.find(p => p.id === webId);
    return Linking.openURL(webpage.website);
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
                    onCalloutPress={handleCalloutPress}
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
                        <Button
                          title="More Info"
                          onPress={() => handleCalloutPress()}
                        />
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

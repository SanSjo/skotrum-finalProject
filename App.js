import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';
import MapView from 'react-native-maps';

const Container = Styled.View`
    flex: 1;
`;

const latDelta = 0.025;
const longDelta = 0.025;

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [markers, setMarkers] = useState([]);
  // const [coordinators, setCoordinators] = useState({
  //   latitude: 0,
  //   longitude: 0
  // });

  useEffect(() => {
    fetch('https://babyrooms.herokuapp.com/findBabyRooms')
      .then(res => res.json())
      .then(json => {
        setIsLoading(false);
        setMarkers(json);
      });
  }, []);

  return (
    <Container>
      <MapView
        style={{ flex: 1 }}
        showsUserLocation
        initialRegion={{
          latitude: 59.329323,
          longitude: 18.068581,
          latitudeDelta: latDelta,
          longitudeDelta: longDelta
        }}
      />
      {isLoading
        ? null
        : markers.map((marker, index) => {
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
              />
            );
          })}
    </Container>
  );
};

export default App;

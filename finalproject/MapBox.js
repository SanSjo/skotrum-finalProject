import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const styles = {
  width: '100vw',
  height: 'calc(100vh - 80px)',
  position: 'absolute'
};

const MapBox = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    MapboxGl.setAccessToken(
      'pk.eyJ1Ijoic2Fuc2pvIiwiYSI6ImNrN2Fpbm5ncDAyMmgzbG1zd2MzMXh3ZWQifQ.5S_TRL8MWhIlV96anO7hXw'
    );
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [0, 0],
        zoom: 5
      });

      map.on('load', () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapBox;

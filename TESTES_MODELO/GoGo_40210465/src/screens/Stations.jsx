import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import api from '../services/api/api';
import busStop from '../assets/bus-stop.png';

export default function Stations() {
  // Initial region
  const [region, setRegion] = useState({
    latitude: 41.354639,
    longitude: -8.756689,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [stations, setStations] = useState([]);

  useEffect(() => {
    api
      .get('/stations')
      .then(response => {
        console.log(response.data);
        setStations(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}>
        {/* rendering markers */}
        {stations.map(station => (
          <Marker
            key={station.id}
            coordinate={{
              latitude: station.location.latitude,
              longitude: station.location.longitude,
            }}
            image={busStop}
          />
        ))}
      </MapView>
    </>
  );
}

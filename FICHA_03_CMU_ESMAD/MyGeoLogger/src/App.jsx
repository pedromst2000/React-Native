import React, {useState} from 'react';
import {Button, Alert, SafeAreaView, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';

function App() {
  const [position, setPosition] = useState({
    latitude: 40.36639646307181,
    longitude: -7.738581123993704,
  });

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        console.log('getCurrentPosition', pos);

        setPosition(pos.coords);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };
  return (
    <SafeAreaView>
      <View>
        <Text>
          <Text>Current position: </Text>
          {position.latitude}, {position.longitude}
        </Text>
        <Button title="Get Current Position" onPress={getCurrentPosition} />
      </View>
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{height: 400}}
          region={{
            latitude: position.latitude,
            longitude: position.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

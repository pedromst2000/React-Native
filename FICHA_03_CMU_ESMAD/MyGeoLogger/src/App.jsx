import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Button,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

function App() {
  const [position, setPosition] = React.useState({
    // be default, we are at ESMAD
    latitude: 41.3519,
    longitude: -8.7389,
  });
  const [watchId, setWatchId] = React.useState(null);

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setPosition(`${latitude}, ${longitude}`);
      },
      error => {
        Alert.alert(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  };

  const getRealTimePosition = () => {
    setWatchId(
      Geolocation.watchPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setPosition(`${latitude}, ${longitude}`);
        },
        error => {
          Alert.alert(error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000,
          distanceFilter: 1,
        },
      ),
    );
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 20,
              }}>
              Geolocation
            </Text>
          </View>
          <View>
            <Text>Current Position</Text>
          </View>
          <View>
            <View>
              <Text>Latitude: {position ? position.split(',')[0] : ''}</Text>
            </View>
            <View>
              <Text>Longitude: {position ? position.split(',')[1] : ''}</Text>
            </View>
          </View>
          <View>
            <Button
              title="Get Current Position"
              onPress={() => {
                getCurrentPosition();
              }}></Button>
            <Button
              title="Get Realtime Position"
              onPress={() => {
                getRealTimePosition();
              }}></Button>
            <Button
              title="Clear"
              onPress={() => {
                setPosition(null);
              }}></Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

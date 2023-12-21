import React, {useState} from 'react';
import {View, Text, TouchableHighlight, Image, ScrollView} from 'react-native';
import {detailStyles} from '../styles/DetailStyles';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import busStop from '../assets/bus-stop.png';

const DetailsScreen = ({route, navigation}) => {
  const {carDetail} = route.params;

  const [detail, setDetail] = useState(carDetail);

  return (
    <ScrollView>
      <View>
        <View style={detailStyles.btnContainer}>
          <TouchableHighlight
            style={detailStyles.homeBtn}
            underlayColor={'#EE765B'}
            onPress={() => navigation.navigate('Home')}>
            <Text>Go to Home</Text>
          </TouchableHighlight>
        </View>
        <View style={detailStyles.detailContainer}>
          <View>
            <Image
              source={{uri: detail.image}}
              style={detailStyles.detailImage}
            />
          </View>
          <View>
            <Text>{detail.brand}</Text>
          </View>
          <View>
            <Text>{detail.model}</Text>
          </View>
          <View>
            <Text>{detail.year}</Text>
          </View>
          <View>
            <Text>{detail.price}€</Text>
          </View>
          <View>
            <Text>{detail.city}</Text>
          </View>
          <View>
            <Text>{detail.description}</Text>
          </View>
        </View>
        <MapView style={{flex: 1}} provider={PROVIDER_GOOGLE}>
          <Marker
            coordinate={{
              latitude: detail.location.latitude,
              longitude: detail.location.longitude,
            }}
            image={busStop}
          />
        </MapView>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

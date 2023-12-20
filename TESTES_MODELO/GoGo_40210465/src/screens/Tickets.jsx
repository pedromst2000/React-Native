import React from 'react';
import {View, Text, Image} from 'react-native';
import ticketsImage from '../assets/undraw_In_progress_re_m1l6.png';
import {ticketsStyles} from '../styles/ticketsStyles';
import {Dimensions} from 'react-native';

export default function Tickets() {
  return (
    <>
      <View style={ticketsStyles.container}>
        <View>
          <Image
            style={
              (ticketsStyles.image,
              {
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height / 3,
              })
            }
            resizeMode="contain"
            source={ticketsImage}
          />
        </View>
        <View>
          <Text style={ticketsStyles.text}>Work in progress...</Text>
        </View>
      </View>
    </>
  );
}

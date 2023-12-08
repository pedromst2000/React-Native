import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

import {accelerometer} from 'react-native-sensors';

function App() {

  const [{x, y, z}, setXYZ] = React.useState({x: 0, y: 0, z: 0});


  React.useEffect(() => {
      const subscription = accelerometer.subscribe(({x, y, z}) => {
        setXYZ({x, y, z});
      } );

      return () => {
        subscription.unsubscribe();
      };
  }, []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: '#000'}}></ScrollView>
    
      <View style={{backgroundColor: '#000', height: '100%'}}>
        <Text style={{color: '#fff', fontSize: 30}}>X: {x}</Text>
        <Text style={{color: '#fff', fontSize: 30}}>Y: {y}</Text>
        <Text style={{color: '#fff', fontSize: 30}}>Z: {z}</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

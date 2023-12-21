import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const {Navigator, Screen, Group} = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={'#ff9b54'} />
      <Navigator initialRouteName="Home">
        <Group
          screenOptions={{
            headerShown: false,
          }}>
          <Screen name="Home" component={HomeScreen} />
          <Screen name="Detail" component={DetailsScreen} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
}

export default App;

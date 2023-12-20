import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LiveScheduleScreen from './screens/LiveSchedule';
import StationsScreen from './screens/Stations';
import TicketsScreen from './screens/Tickets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {Navigator, Screen, Group} = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={'#A63A50'} />
      <Navigator initialRouteName="Live Schedule">
        <Group
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#A63A50',
            tabBarInactiveTintColor: '#AB9B96',
            tabBarStyle: {
              paddingBottom: 3,
            },
          }}>
          <Screen
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="alarm" size={25} color={color} />
              ),
            }}
            name="Live Schedule"
            component={LiveScheduleScreen}
          />
          <Screen
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="bus-stop" size={25} color={color} />
              ),
            }}
            name="Stations"
            component={StationsScreen}
          />
          <Screen
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="ticket-confirmation" size={25} color={color} />
              ),
            }}
            name="Tickets"
            component={TicketsScreen}
          />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
}

export default App;

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MatchesScreen from './screens/Matches.screen';
import EventsScreen from './screens/Events.screen';

const {Navigator, Screen, Group} = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Navigator initialRouteName="Matches">
          <Group
            screenOptions={{
              // headerShown: false,
              headerStyle: {
                backgroundColor: '#171e21',
              },
              headerTintColor: '#fff',
              statusBarStyle: 'light',
              headerTitleAlign: 'center',
              statusBarColor: '#000',
            }}>
            <Screen name="myScores" component={MatchesScreen} />
            <Screen name="Match Detail" component={EventsScreen} />
          </Group>
        </Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

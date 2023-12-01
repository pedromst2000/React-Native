import {
  View,
  Text,
  StatusBar,
  ScrollView

} from 'react-native';
import Menu from './components/Menu';


const App = () => {

  return (
    <>
    <StatusBar barStyle="light-content"
      backgroundColor={'#000'}
    />
    <ScrollView>
      <Menu />
    </ScrollView>
    </>
  )
};

export default App;
import React from 'react';
import scores from './data/scores.json';  
import {
  ScrollView,
  StatusBar,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import Header from './components/Header';
import Main from './components/Main';


function App() {

const [data, setData] = React.useState(scores);

React.useEffect(() => {
  
  // console.log('data', data);

  console.log(data[0].matches);

  // filter the teams is winning
  const isHomeWinner = data[0].matches.filter((match) => match.isHomeWinner === true);

  console.log('isHomeWinner', isHomeWinner);

},[]);


  return (
    <>
      <StatusBar
      barStyle="light-content" 
      backgroundColor="#000"
      />  
      <SafeAreaView>
        <ScrollView>
          <Header />
            <Main 
            data={data}
            />
        </ScrollView>
      </SafeAreaView>
      
    </>
  );
}


export default App;

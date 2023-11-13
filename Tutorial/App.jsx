import React from 'react';
import Form from './components/Form';
import {containerStyles, formStyles} from './styles/index'
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet
} from 'react-native';

function App() {

  const [name, setName] = React.useState('');
  const [saveName, setSaveName] = React.useState({
    name: '',
  });

  const handleSubmitName = (name) => {
    setSaveName({name: ''});
    setSaveName({name: name});
    setName('');
    name == '' ? alert('Please enter your name') : setSaveName({name: name});
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
      >
        <View
          style={containerStyles.container}
        >
        <View>
          <Text
            style={containerStyles.textHeading}
          >Try Submiting your name</Text>
        </View>
        <View>
          <Form 
            styles={formStyles}
            name={name}
            setName={setName}
            handleSubmitName={handleSubmitName}
          />
        </View>
        <View>
          <Text>
              Displaying your name
          </Text>
          <Text
            style={containerStyles.display}
          >
              {saveName.name}
          </Text>
        </View>
        </View>
      </ScrollView>
    </>
  );
}



export default App;

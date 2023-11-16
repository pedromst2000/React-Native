import React from 'react';
import {textStyles} from './styles/Text.styles';
import {randomStyles} from './utils/randomStyles';
import Form from './components/Form';
import List from './components/List';

import {
  ScrollView,
  StatusBar,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';

function App() {
  const [text, setText] = React.useState('');
  const [listText, setListText] = React.useState([{}]);

  const handleAddText = () => {
    if (text.length > 0) {
      // Generate random styles for the new text
      const randomStyle = randomStyles(textStyles);
      // Add the text and its corresponding style to the list
      setListText([
        ...listText,
        {
          id: listText.length + 1,
          text: text,
          style: randomStyle,
        },
      ]);
      // Clear the input field
      setText('');
    }

    console.log(listText);
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#000'} />
      <SafeAreaView>
        <ScrollView>
          <View>
            <Form text={text} handleAddText={handleAddText} setText={setText} />
            <List listText={listText} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default App;

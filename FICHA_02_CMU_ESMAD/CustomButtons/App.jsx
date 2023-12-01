import {
  View,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import React from 'react';
import Button from './Button';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View>
          <View>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              excepturi voluptatum quidem obcaecati possimus amet quas
              laboriosam! Sint, distinctio. Odit excepturi quasi aperiam
              exercitationem alias vero veritatis qui id tempore?
            </Text>
          </View>
          <View>
            <Button
              text="Press Me"
              onPress={() => alert('Hello World')}
              width={216}
            />
            <Button
              text="Sign Up"
              onPress={() => alert('Hello World')}
              width={150}
            />
            <Button
              text="Follow"
              onPress={() => alert('Hello World')}
              width={310}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default App;

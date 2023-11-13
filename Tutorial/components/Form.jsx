import React from 'react';
import { View, TextInput, Button} from 'react-native';
import propTypes from 'prop-types';

function Form(props) {
  return (
    <View
      style={props.styles.form}
    >
        <TextInput
            style={props.styles.input}
          placeholder="Enter your name"
            value={props.name}  
            onChangeText={
                (text) => props.setName(text)
            }
/>
        <Button title="Submit" onPress={
            props.handleSubmitName.bind(this, props.name)
        }/>
    </View>
  );
}

Form.propTypes = {
  styles: propTypes.object,
  name: propTypes.string,
    setName: propTypes.func,
 handleSubmitName: propTypes.func
};

export default Form;

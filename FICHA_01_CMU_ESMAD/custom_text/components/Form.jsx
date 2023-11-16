import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Button } from 'react-native'
import {formStyles} from '../styles/Form.styles';

function Form(props) {
  return (
    <View
        style={formStyles.container}
    >
      <TextInput
        style={formStyles.input}
        value={props.text}
        onChangeText={text => props.setText(text)}
        placeholder="Insert a text"
      />
    <View
        style={
            formStyles.button
        }
    >
      <Button 
      title="Add" onPress={props.handleAddText} />
      </View>
    </View>
  );
}

Form.propTypes = {
    text: PropTypes.string,
    handleAddText: PropTypes.func,
    setText: PropTypes.func
}

export default Form

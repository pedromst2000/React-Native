import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import {listStyles} from '../styles/List.styles';

function List(props) {
  return (
    <>
    <View style={listStyles.container}>
      {props.listText.map((item, index) => (
        <View key={index}>
          <Text 
            key={item.id}
          style={item.style}>{item.text}</Text>
        </View>
      ))}
    </View>
    </>
  );
}

List.propTypes = {
    listText: PropTypes.array
}

export default List

import {Text, View, TouchableHighlight} from 'react-native';

import buttonStyles from './styles/buttons.styles';

const Button = ({text, onPress, underlayColor, width}) => {

    return (
      <TouchableHighlight
        style={[buttonStyles.button, {width}]}
        underlayColor={'#FCC97D'}
        onPress={onPress}>
        <View>
          <Text style={buttonStyles.buttonText}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
};


export default Button;
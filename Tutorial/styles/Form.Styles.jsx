import {StyleSheet} from 'react-native'


const formStyles = StyleSheet.create({

    form : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // give the input a border
    input : {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: 200,
        borderRadius: 14,
    },

    button : {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },

});



export default formStyles;
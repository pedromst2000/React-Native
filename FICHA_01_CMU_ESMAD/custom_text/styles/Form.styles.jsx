import {StyleSheet} from 'react-native';

export const formStyles = StyleSheet.create({
  // dynamic styles for font size and color

  container: {
    padding: 20,
    backgroundColor: '#eaeaea',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
},

  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    fontSize: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    width: '70%',
  },

  button: {
    color: '#fff',
    fontSize: 15,
    padding: 10,
    borderRadius: 10,
    width: '60%',
  },

});

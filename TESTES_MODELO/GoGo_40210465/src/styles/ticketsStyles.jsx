import {StyleSheet} from 'react-native';

export const ticketsStyles = StyleSheet.create({
  image: {
    // 1/3 of the screen
    width: '100%',
    height: '33%',
  },

  text: {
    fontSize: 24,
    color: '#A63A50',
  },

  container: {
    alignContent: 'horizontal',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 110,
    gap: 50,
  },
});

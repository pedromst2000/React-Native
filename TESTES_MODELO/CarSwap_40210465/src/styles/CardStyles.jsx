import {StyleSheet} from 'react-native';

export const cardStyles = StyleSheet.create({
  bottomCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  unFavorite: {
    backgroundColor: '#FFAE42',
    padding: 10,
    borderRadius: 5,
  },

  Favorite: {
    backgroundColor: '#E3E644',
    padding: 10,
    borderRadius: 5,
  },

  FavoriteText: {
    color: '#501B1B',
    fontSize: 13,
    flex: 1,
    textAlign: 'center',
  },

  delete: {
    backgroundColor: '#ff5349',
    padding: 10,
    borderRadius: 5,
  },

  deleteText: {
    color: '#fff',
    fontSize: 13,
    flex: 1,
    textAlign: 'center',
  },
});

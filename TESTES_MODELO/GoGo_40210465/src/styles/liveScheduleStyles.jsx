import {StyleSheet} from 'react-native';

const liveSchedule = StyleSheet.create({
  nextDepartures: {
    marginTop: 16,
    marginHorizontal: 16,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#A63A50',
  },

  list: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 20,
    marginVertical: 8,
    borderRadius: 4,
  },

  firstItem: {
    backgroundColor: '#A63A50',
  },

  item: {
    backgroundColor: '#AB9B96',
  },

  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F0E7D8',
  },

  listText: {
    color: '#F0E7D8',
  },
});

export default liveSchedule;

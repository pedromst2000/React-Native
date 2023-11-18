import {StyleSheet} from 'react-native';

const mainStyles = StyleSheet.create({
  text: {
    fontSize: 46,
    fontWeight: 'bold',
  },

  container: {
    backgroundColor: '#171e21',
    margin: 30,
    marginTop: 60,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 40,
  },

  headerContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTextContent: {
    flexDirection: 'row',
    gap: 132,
  },

  flag: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },

  highligthText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },

  greyText: {
    color: '#808080',
    fontSize: 13,
    fontWeight: 'medium',
  },

  greyTime: {
    color: '#808080',
    fontSize: 12,
    fontWeight: 'medium',
  },

  greenText: {
    color: '#42bb4f',
    fontSize: 13,
    fontWeight: 'bold',
  },

  scores: {
    paddingTop: 16,
    gap: 15,
    // 3 columns
    flexDirection: 'row',
    
},

  scoresContainer: {
    paddingTop: 16,
},

matchesContainer: {
    // flexDirection: 'row',
    gap: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#2d2d2d',
    paddingBottom: 15,
    marginBottom: 15,
},

matches: {
    flexDirection: 'column',
    
}

});

export default mainStyles;

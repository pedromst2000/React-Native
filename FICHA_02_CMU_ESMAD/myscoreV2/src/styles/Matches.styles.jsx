import {StyleSheet} from 'react-native';

const MatchesStyles = StyleSheet.create({
  text: {
    fontSize: 46,
    fontWeight: 'bold',
  },

  container: {
    backgroundColor: '#171e21',
    margin: 30,
    marginTop: 50,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 50,
  },

  headerContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTextContent: {
    flexDirection: 'row',
    gap: 100,
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

  scoresContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  timeColumn: {
    flexDirection: 'column',
    gap: 4,
    paddingLeft: 2,
    alignItems: 'center',
  },

  logoColumn: {
    gap: 12,
  },

  teamsNameColumn: {
    flexDirection: 'column',
    gap: 4,
    paddingLeft: 13,
  },

  scoresColumn: {
    flexDirection: 'column',
    gap: 5,
    paddingLeft: 2,
    borderLeftWidth: 1,
    borderLeftColor: '#808080',
    paddingLeft: 13,
  },

  logoTeam: {
    width: 14,
    height: 14,
    borderRadius: 50,
  },

  teamsContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 2,
    borderLeftWidth: 1,
    borderLeftColor: '#808080',
    paddingLeft: 23,
    marginLeft: 11,
  },

  centerTeams: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 1,
  },
  
  detailItem: {
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 10,
    fontSize: 12,
  },
});

export default MatchesStyles;

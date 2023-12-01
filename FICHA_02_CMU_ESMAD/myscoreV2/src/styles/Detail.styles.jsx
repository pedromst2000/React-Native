import { StyleSheet } from "react-native";

const DetailStyles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  containerLogoTeams: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  bullet: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 10,
  },

  containerScores: {
    flexDirection: 'row',
    gap: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  ScoreWinner: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  ScoreDefeated: {
    color: '#808080',
    fontSize: 20,
    fontWeight: 'medium',
  },

  homeEventsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    gap: 5,
  },

  awayEventsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    gap: 5,
  },
  
  eventsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 2,
    paddingBottom: 12,
    paddingHorizontal: 17,
    gap: 15,
  },

});

export default DetailStyles;
    
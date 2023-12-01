import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import DetailStyles from '../styles/Detail.styles';

const EventsScreen = ({route, navigation}) => {
  const {events} = route.params;

  const [matchevents, setMatchEvents] = React.useState(events);
  const [homeEvents, setHomeEvents] = React.useState([]);
  const [awayEvents, setAwayEvents] = React.useState([]);

  React.useEffect(() => {
    const homeEvents = matchevents.events.filter(event => {
      return event.isHomeEvent;
    });

    const awayEvents = matchevents.events.filter(event => {
      return !event.isHomeEvent;
    });

    setHomeEvents(homeEvents);
    setAwayEvents(awayEvents);
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: '#171e21',
      }}>
      <View>
        <View style={DetailStyles.containerLogoTeams}>
          <Image
            source={{uri: matchevents.logoHomeTeam}}
            style={DetailStyles.logo}></Image>
          <View>
            <Text style={DetailStyles.bullet}></Text>
          </View>
          <Image
            source={{uri: matchevents.logoAwayTeam}}
            style={DetailStyles.logo}></Image>
        </View>
        <View style={DetailStyles.containerScores}>
          <View>
            <Text
              style={
                matchevents.homeScore > matchevents.awayScore
                  ? DetailStyles.ScoreWinner
                  : DetailStyles.ScoreDefeated
              }>
              {matchevents.homeScore}
            </Text>
          </View>
          <View>
            <Text
              style={
                matchevents.awayScore > matchevents.homeScore
                  ? DetailStyles.ScoreWinner
                  : DetailStyles.ScoreDefeated
              }>
              {matchevents.awayScore}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#808080',
            borderBottomWidth: 1,
            marginHorizontal: 15,
          }}></View>
        <View style={DetailStyles.eventsContainer}>
          <View>
            {homeEvents.map((event, index) => {
              return (
                <View style={DetailStyles.homeEventsContainer} key={index}>
                  <Text style={{color: '#fff'}}>{event.time}</Text>
                  <Text style={{color: '#fff'}}>{event.player}</Text>
                  <Text style={{color: '#fff'}}>
                    {event.type == 'goal'
                      ? '⚽️'
                      : event.type == 'fault - Yellow Card'
                      ? '🟨'
                      : event.type == 'fault - Red Card'
                      ? '🟥'
                      : null}
                  </Text>
                </View>
              );
            })}
          </View>
          <View>
            {awayEvents.map((event, index) => {
              return (
                <View key={index}>
                  <View style={DetailStyles.awayEventsContainer}>
                    <Text style={{color: '#808080'}}>{event.time}</Text>
                    <Text style={{color: '#808080'}}>{event.player}</Text>
                    <Text style={{color: '#808080'}}>
                      {event.type == 'goal'
                        ? '⚽️'
                        : event.type == 'fault - Yellow Card'
                        ? '🟨'
                        : event.type == 'fault - Red Card'
                        ? '🟥'
                        : null}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EventsScreen;

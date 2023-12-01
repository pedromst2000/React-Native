import {View, Text, Image} from 'react-native';
import MatchesStyles from '../styles/Matches.styles';

const MatchesCard = ({data, navigation}) => {
  return (
    <View style={MatchesStyles.container}>
      <View style={MatchesStyles.headerContainer}>
        <View>
          <Image source={{uri: data[0].flag}} style={MatchesStyles.flag} />
        </View>
        <View style={MatchesStyles.headerTextContent}>
          <View>
            <View>
              <Text style={MatchesStyles.greyText}>{data[0].country}</Text>
            </View>
            <View>
              <Text style={MatchesStyles.highligthText}>{data[0].league}</Text>
            </View>
          </View>
          <View>
            <Text style={MatchesStyles.greenText}>Box Score</Text>
          </View>
        </View>
      </View>
      {data[0].matches.map((match, index) => {
        return (
          <View style={MatchesStyles.scoresContainer} key={index}>
            <View style={MatchesStyles.timeColumn}>
              <View>
                <Text style={MatchesStyles.greyTime}>{match.time}</Text>
              </View>
              <View>
                <Text style={MatchesStyles.greyTime}>{match.statusMatch}</Text>
              </View>
            </View>
            <View style={MatchesStyles.teamsContainer}>
              <View style={MatchesStyles.centerTeams}>
                <View style={MatchesStyles.logoColumn}>
                  <View>
                    <Image
                      source={{uri: match.logoHomeTeam}}
                      style={MatchesStyles.logoTeam}
                    />
                  </View>
                  <View>
                    <Image
                      source={{uri: match.logoAwayTeam}}
                      style={MatchesStyles.logoTeam}
                    />
                  </View>
                </View>
                <View style={MatchesStyles.teamsNameColumn}>
                  <View>
                    <Text
                      style={
                        match.homeScore > match.awayScore
                          ? MatchesStyles.highligthText
                          : MatchesStyles.greyText
                      }>
                      {match.homeTeam}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={
                        match.awayScore > match.homeScore
                          ? MatchesStyles.highligthText
                          : MatchesStyles.greyText
                      }>
                      {match.awayTeam}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <Text
                onPress={() =>
                  navigation.navigate('Match Detail', {
                    events: match,
                  })
                }
                style={[MatchesStyles.greenText, MatchesStyles.detailItem]}>
                See Details
              </Text>
            </View>
            <View style={MatchesStyles.scoresColumn}>
              <View>
                <Text
                  style={
                    match.homeScore > match.awayScore
                      ? MatchesStyles.highligthText
                      : MatchesStyles.greyTime
                  }>
                  {match.homeScore}
                </Text>
              </View>
              <View>
                <Text
                  style={
                    match.awayScore > match.homeScore
                      ? MatchesStyles.highligthText
                      : MatchesStyles.greyTime
                  }>
                  {match.awayScore}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default MatchesCard;

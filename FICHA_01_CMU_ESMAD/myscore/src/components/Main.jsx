import {View, Text, Image} from 'react-native';
import mainStyles from '../styles/Main.styles';
import proptypes from 'prop-types';

export default function Main({data}) {
  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.headerContainer}>
        <View>
          <Image source={{uri: data[0].flag}} style={mainStyles.flag} />
        </View>
        <View style={mainStyles.headerTextContent}>
          <View>
            <View>
              <Text style={mainStyles.greyText}>{data[0].country}</Text>
            </View>
            <View>
              <Text style={mainStyles.highligthText}>{data[0].league}</Text>
            </View>
          </View>
          <View>
            <Text style={mainStyles.greenText}>Box Score</Text>
          </View>
        </View>
      </View>
      {data[0].matches.map((match, index) => {
        return (
          <View style={mainStyles.scoresContainer} key={index}>
            <View style={mainStyles.timeColumn}>
              <View>
                <Text style={mainStyles.greyTime}>{match.time}</Text>
              </View>
              <View>
                <Text style={mainStyles.greyTime}>{match.statusMatch}</Text>
              </View>
            </View>
            <View style={mainStyles.teamsContainer}>
              <View style={mainStyles.centerTeams}>
                <View style={mainStyles.logoColumn}>
                  <View>
                    <Image
                      source={{uri: match.logoHomeTeam}}
                      style={mainStyles.logoTeam}
                    />
                  </View>
                  <View>
                    <Image
                      source={{uri: match.logoAwayTeam}}
                      style={mainStyles.logoTeam}
                    />
                  </View>
                </View>
                <View style={mainStyles.teamsNameColumn}>
                  <View>
                    <Text
                      style={
                        match.isHomeWinner === true
                          ? mainStyles.highligthText
                          : mainStyles.greyText
                      }>
                      {match.homeTeam}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={
                        match.isAwayWinner === true
                          ? mainStyles.highligthText
                          : mainStyles.greyText
                      }>
                      {match.awayTeam}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={mainStyles.scoresColumn}>
              <View>
                <Text
                  style={
                    match.isHomeWinner === true
                      ? mainStyles.highligthText
                      : mainStyles.greyTime
                  }>
                  {match.homeScore}
                </Text>
              </View>
              <View>
                <Text
                  style={
                    match.isAwayWinner === true
                      ? mainStyles.highligthText
                      : mainStyles.greyTime
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
}

Main.propTypes = {
  data: proptypes.array,
};

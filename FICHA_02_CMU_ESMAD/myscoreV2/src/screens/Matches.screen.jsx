import MatchesCard from '../components/MatchesCard';
import React from 'react';
import MatchesData from '../data/scores.json';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MatchesScreen = ({ navigation }) => {
   
    const [matches, setMatches] = React.useState(MatchesData);
   
    return (
            <>
           <MatchesCard navigation={navigation} 
            data={matches}          
            />
            </>
        );
}

export default MatchesScreen;
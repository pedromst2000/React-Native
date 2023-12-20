import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import liveSchedule from '../styles/liveScheduleStyles';
import Loading from '../components/Loading';
import api from '../services/api/api';

export default function LiveSchedule() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // update the list every 5 seconds
    const interval = setInterval(() => {
      api.get('/routes').then(response => {
        setData(response.data);
        setIsLoading(false);
      });
    }, 5000);

    // clean up function
    return () => clearInterval(interval);
  }, []);

  const renderItem = ({item, index}) => {
    const itemStyle = index === 0 ? liveSchedule.firstItem : liveSchedule.item;

    return (
      <View style={[itemStyle, liveSchedule.list]}>
        <Text style={(liveSchedule.listText, liveSchedule.listTitle)}>
          {item.name}
        </Text>
        <Text style={liveSchedule.listText}>
          {item.origin} to {item.destination} ({item.type})
        </Text>
        <Text style={liveSchedule.listText}>
          Next departure time: {item.next_departure_time}
        </Text>
        <Text style={liveSchedule.listText}>{item.status}</Text>
      </View>
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <View>
          <Text style={liveSchedule.nextDepartures}>Next Departures</Text>
          <FlatList
            style={liveSchedule.listText}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </>
  );
}

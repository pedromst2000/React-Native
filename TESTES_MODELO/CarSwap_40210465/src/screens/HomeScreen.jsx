import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Button, TouchableHighlight} from 'react-native';
import Loading from '../components/Loading';
import {Card} from '@rneui/themed';
import {cardStyles} from '../styles/CardStyles';
import {AsyncStorage} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://carswap-api.vercel.app/ads')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));

    return () => {
      setData([]);
    };
  }, []);

  const saveFavorite = async id => {
    try {
      await AsyncStorage.setItem(id, id);
      setIsFavorite(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ScrollView>
        {isLoading ? (
          <Loading />
        ) : (
          data.map(item => (
            <Card key={item.id}>
              <Card.Title>{item.brand}</Card.Title>
              <Card.Divider />
              <Card.Image source={{uri: item.image}} />
              <Card.Divider />
              <View style={cardStyles.bottomCard}>
                <Text>{item.model}</Text>
                <Text>{item.year}</Text>
              </View>
              <Card.Divider />
              <Text>{item.price} €</Text>
              <Text>{item.city}</Text>
              <Card.Divider />
              <View style={cardStyles.buttonContainer}>
                <Button
                  title="View Details"
                  onPress={() =>
                    navigation.navigate('Detail', {
                      carDetail: item,
                    })
                  }
                />

                {isFavorite ? (
                  <TouchableHighlight
                    underlayColor={'#E3E644'}
                    style={cardStyles.Favorite}
                    onPress={() => saveFavorite(item.id)}>
                    <Text style={cardStyles.FavoriteText}>Favorite</Text>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    underlayColor={'#FFAE42'}
                    style={cardStyles.unFavorite}
                    onPress={() => console.log('Favorite button pressed')}>
                    <Text style={cardStyles.FavoriteText}>Favorite</Text>
                  </TouchableHighlight>
                )}
                <TouchableHighlight
                  underlayColor={'#EE765B'}
                  style={cardStyles.delete}
                  onPress={() => console.log('Favorite button pressed')}>
                  <Text style={cardStyles.deleteText}>Delete</Text>
                </TouchableHighlight>
              </View>
            </Card>
          ))
        )}
      </ScrollView>
    </>
  );
};

export default HomeScreen;

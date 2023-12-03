import {View, Text} from 'react-native';
import cardStyles from '../styles/cardStyles.styles';
import Loading from './Loading';

const MovieCard = ({movie, isLoading}) => {
  return (
    <View style={cardStyles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <View style={cardStyles.titleContainer}>
            <Text style={cardStyles.title}>{movie.movie}</Text>
          </View>
          <View style={cardStyles.ratingContainer}>
            <View>
              <Text>Rating :</Text>
            </View>
            <View>
              <Text style={cardStyles.rating}>{movie.rating}</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default MovieCard;

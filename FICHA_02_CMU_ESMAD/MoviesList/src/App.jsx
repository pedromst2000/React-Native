import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import api from './services/api/api';
import {randomMovieID} from './utils/randomMovie';
import MovieCard from './components/MovieCard';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

function App() {
  const [movie, setMovie] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [gestureState, setGestureState] = React.useState({
    gestureName: 'none'
  });


  const onSwipe = (gestureName, gestureState) => {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    setGestureState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_LEFT:
        api
          .get(`/movies/${randomMovieID()}`)
          .then(response => {
            setMovie(response.data);
            setIsLoading(false);
          })
          .catch(error => {
            console.log(error);
          });
        break;
      case SWIPE_RIGHT:
        api
          .get(`/movies/${randomMovieID()}`)
          .then(response => {
            setMovie(response.data);
            setIsLoading(false);
          })
          .catch(error => {
            console.log(error);
          });
        break;
    }
  };


  React.useEffect(() => {
    // default movie
    api
      .get('/movies/1')
      .then(response => {
        setMovie(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 90,
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <GestureRecognizer
        onSwipe={(direction, state) => onSwipe(direction, state)}
        config={config}
      >
        <View>
          <MovieCard movie={movie} isLoading={isLoading} />
        </View>
      </GestureRecognizer>
    </SafeAreaView>
  );
}

export default App;

import PropTypes from 'prop-types'
import {View, Text, StatusBar, ScrollView} from 'react-native';
import food from '../data/food.json';
import React from 'react';


function Menu(props) {


const [foods, setFoods] = React.useState(food);


React.useEffect(() => {

    console.log(foods);

}, []);

    return (
    <View>
       {/* return the categories without duplicates */}
         {foods.map((food, index) => {
                // return without duplicates
                foods.filter((food, index) => {
                    return foods.indexOf(food) === index;
                })
                return <Text key={index}>{food.category}</Text>

})}
        
    </View>
  )
}

Menu.propTypes = {}

export default Menu

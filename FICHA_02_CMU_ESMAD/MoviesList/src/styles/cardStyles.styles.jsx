import { StyleSheet } from "react-native";

const cardStyles = StyleSheet.create({

    container: {
            backgroundColor: '#fff',
            padding: 30,
            margin: 30,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },

    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },

    rating: {
        fontSize: 13,
        fontWeight: 'medium',
        color: '#000',
    },

});

export default cardStyles;
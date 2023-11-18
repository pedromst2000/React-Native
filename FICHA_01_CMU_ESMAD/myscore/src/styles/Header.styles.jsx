import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#171e21',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    top: 0,
    position: 'sticky',
  },

    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    icon: {
        width: 18,
        height: 18,
    },
});

export default headerStyles;
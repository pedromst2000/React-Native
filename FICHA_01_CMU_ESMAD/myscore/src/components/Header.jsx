import { View, Text, Image } from 'react-native'
import headerStyles from '../styles/Header.styles'
import menuIcon from '../assets/images/Menu.png'

export default function Header() {
  return (
    <>
      <View style={headerStyles.container}>
          <View>
            <Text style={headerStyles.text}>myScore</Text>
          </View>
            <View>
                <Image
                style={headerStyles.icon}
                source={menuIcon} />
            </View>
      </View>
    </>
  );
}

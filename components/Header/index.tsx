import { View, Image  } from 'react-native'
import styles from './styles'

export const Header = () => {

    const logo = require('../../assets/images/logo.png')
    const hamburguer = require('../../assets/images/menu.png')

    return (
      <View style={styles.container} >
        <Image style={styles.logo} source={logo} />
        <Image style={styles.menu} source={hamburguer} />
      </View>
    )
}
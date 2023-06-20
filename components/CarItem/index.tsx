import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'

export const CarItem = () => {

    const backGroundPhoto = require('../../assets/images/ModelX.jpeg')

    return (
      <View style={styles.carContainer}>
        <ImageBackground source={backGroundPhoto} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>Starting at $60,980</Text>
        </View>
      </View>
    )
}

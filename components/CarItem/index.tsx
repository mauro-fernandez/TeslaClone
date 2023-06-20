import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'
import { StyledButton } from '../StyledButton'

export const CarItem = () => {

    const backGroundPhoto = require('../../assets/images/ModelX.jpeg')

    return (
      <View style={styles.carContainer}>
        <ImageBackground source={backGroundPhoto} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>Starting at $60,980</Text>
        </View>
        <StyledButton type={'primary'} title={'Custom Order'} onPress={() => {}}/>
        <StyledButton type={'secondary'} title={'Existing Inventory'} onPress={() => {}}/>
      </View>
    )
}
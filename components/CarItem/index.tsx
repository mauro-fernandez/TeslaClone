import { View, Text, ImageBackground, ImageURISource } from 'react-native'
import styles from './styles'
import { StyledButton } from '../StyledButton'

interface ICarItems {
  name: string;
  tagline: string;
  taglineCTA?: string; 
  image: ImageURISource;
}

export const CarItem = (props: ICarItems) => {
    const { name, tagline, image, taglineCTA } = props

    return (
      <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>
            {tagline}
            {' '}
            <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <StyledButton
            type={'primary'}
            title={'Custom Order'}
            onPress={() => console.warn('Presionaste Custom Order')}
          />
          <StyledButton
            type={'secondary'}
            title={'Existing Inventory'}
            onPress={() => console.warn('Presionaste Existing Inventory')}
          />
        </View>
      </View>
    )
}
import { View, FlatList, Dimensions } from 'react-native'
import styles from './styles'
import cars from './cars'
import { CarItem } from '../../components/CarItem';

export const CarsList = (props: any) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item}) =>
                    <CarItem
                        name={item.name}
                        tagline={item.tagline}
                        taglineCTA={item.taglineCTA}
                        image={item.image}
                    />
                }
                decelerationRate={'fast'}
                snapToAlignment='start'
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />  
        </View>
    )
}
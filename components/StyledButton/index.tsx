import { View, Text, Pressable } from 'react-native'
import styles from './styles'

interface IButtonProps {
    type: string;
    title: string;
    onPress: () => void;
}

export const StyledButton = (props: IButtonProps) => {
    const  { type, title, onPress } = props

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, type === 'primary' ? styles.primaryButtonColor : styles.secondaryButtonColor]}
                onPress={onPress}
            >
            <Text style={[styles.text, type === 'primary' ? styles.primaryTextColor : styles.secondaryTextColor]}>{title}</Text>
            </Pressable>
        </View>
    )
}

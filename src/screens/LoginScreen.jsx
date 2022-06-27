import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import LoginForm from '../features/auth/LoginForm'

const LoginScreen = () => {
    const navigation = useNavigation()

    const goToRegister = () => {
        return navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>LoginScreen</Text>
            </View>

            <LoginForm />

            <View style={styles.footer}>
                <View style={{ alignItems: 'center' }}>
                    <Text>Don't have an account.</Text>
                    <Text onPress={goToRegister} style={styles.linkText}>
                        Register now
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header: {
        flex: 0.5,
    },
    footer: {
        flex: 0.5,
        justifyContent: 'center',
    },
    linkText: {
        color: '#1678F2',
    },
})

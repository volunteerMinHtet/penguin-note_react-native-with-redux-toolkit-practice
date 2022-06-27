import { StyleSheet, Text, View } from 'react-native'
import RegisterForm from '../features/auth/RegisterForm'

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>RegisterScreen</Text>
            </View>

            <RegisterForm />

            <View style={styles.footer}></View>
        </View>
    )
}

export default RegisterScreen

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

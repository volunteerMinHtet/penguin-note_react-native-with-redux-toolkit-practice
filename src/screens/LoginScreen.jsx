import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../features/auth/Login'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text>LoginScreen</Text>
            <Login />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

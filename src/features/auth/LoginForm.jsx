import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useLoginMutation } from '../../app/services/api'

const LoginForm = () => {
    const [login, { isLoading, isSuccess, isError, error: loginError, status }] = useLoginMutation()

    const [loginFormData, setLoginFormData] = React.useState({
        user_name: null,
        password: null,
    })

    const handleLogin = async () => {
        try {
            await login(loginFormData).unwrap()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text>Login</Text>

            <View style={styles.formInputsGroup}>
                <TextInput
                    placeholder="Username"
                    value={loginFormData.user_name}
                    onChangeText={(text) => setLoginFormData({ ...loginFormData, user_name: text })}
                />

                <TextInput
                    placeholder="Password"
                    value={loginFormData.password}
                    onChangeText={(text) => setLoginFormData({ ...loginFormData, password: text })}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    onPress={handleLogin}
                    style={[
                        styles.submitBtnContainer,
                        //  { backgroundColor: theme.colors.primary }
                    ]}
                >
                    <Text style={styles.submitBtnText}>Login</Text>
                </TouchableOpacity>
            </View>

            <Text>{`Status: ${status}`}</Text>
            {isError && <Text>{loginError.data?.message}</Text>}
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderWidth: 1,
    },
    formInputsGroup: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginHorizontal: 16,
        borderWidth: 1,
    },
})

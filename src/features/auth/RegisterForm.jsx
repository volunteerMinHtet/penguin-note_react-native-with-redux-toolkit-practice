import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRegisterMutation } from '../../app/services/api'

const RegisterForm = () => {
    const [register, { isLoading, isSuccess, isError, error: registerError, status }] = useRegisterMutation()

    const [registerFormData, setRegisterFormData] = React.useState({
        name: null,
        user_name: null,
        password: null,
    })

    const handleRegister = async () => {
        try {
            await register(registerFormData).unwrap()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text>Register</Text>

            <View style={styles.formInputsGroup}>
                <TextInput
                    placeholder="Name"
                    value={registerFormData.name}
                    onChangeText={(text) => setRegisterFormData({ ...registerFormData, name: text })}
                />

                <TextInput
                    placeholder="Username"
                    value={registerFormData.user_name}
                    onChangeText={(text) => setRegisterFormData({ ...registerFormData, user_name: text })}
                />

                <TextInput
                    placeholder="Password"
                    value={registerFormData.password}
                    onChangeText={(text) => setRegisterFormData({ ...registerFormData, password: text })}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    onPress={handleRegister}
                    style={[
                        styles.submitBtnContainer,
                        //  { backgroundColor: theme.colors.primary }
                    ]}
                >
                    <Text style={styles.submitBtnText}>Register</Text>
                </TouchableOpacity>
            </View>

            <Text>{`Status: ${status}`}</Text>
            {isError && <Text>{registerError.data?.message}</Text>}
        </View>
    )
}

export default RegisterForm

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

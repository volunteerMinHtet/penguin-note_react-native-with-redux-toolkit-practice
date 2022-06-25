import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider, useSelector } from 'react-redux'
import store from './src/app/store'
import { selectIsAuthenticated } from './src/features/auth/authSlice'
import HomeTabs from './src/screens/HomeTabs'
import LoginScreen from './src/screens/LoginScreen'

const Stack = createNativeStackNavigator()

function MainLayout() {
    const isAuthenticated = useSelector(selectIsAuthenticated)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!isAuthenticated ? (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                    </>
                ) : (
                    <Stack.Screen name="HomeTabs" component={HomeTabs} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default function App() {
    return (
        <Provider store={store}>
            <MainLayout />

            {/* <View style={styles.container}>
                <PrivateNoteScreen />
                <LoginScreen />
                <StatusBar style="dark" />
            </View> */}
        </Provider>
    )
}

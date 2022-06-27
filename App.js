import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator } from 'react-native'
import { Provider as ReduxProvider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './src/app/store'
import { selectIsAuthenticated } from './src/features/auth/authSlice'
import HomeTabs from './src/screens/HomeTabs'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'

const Stack = createNativeStackNavigator()

function MainLayout() {
    const isAuthenticated = useSelector(selectIsAuthenticated)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!isAuthenticated ? (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
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
        <ReduxProvider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <MainLayout />
            </PersistGate>
        </ReduxProvider>
    )
}

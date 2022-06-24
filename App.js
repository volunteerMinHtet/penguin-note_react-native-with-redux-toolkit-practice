import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/app/store'

import PrivateNoteScreen from './src/screens/PrivateNoteScreen'

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <PrivateNoteScreen />
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
})

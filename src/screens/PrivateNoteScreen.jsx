import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrivateNotesList from '../features/private-notes/PrivateNoteList'

const PrivateNoteScreen = () => {
    return (
        <View style={styles.container}>
            <Text>PrivateNoteScreen</Text>
            <PrivateNotesList />
        </View>
    )
}

export default PrivateNoteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGetPrivateNotesQuery } from '../features/api/apiSlice'

const PrivateNoteScreen = () => {
    const { data: privateNotes, isLoading, isError, error } = useGetPrivateNotesQuery()

    return (
        <View>
            <Text>PrivateNoteScreen</Text>
        </View>
    )
}

export default PrivateNoteScreen

const styles = StyleSheet.create({})

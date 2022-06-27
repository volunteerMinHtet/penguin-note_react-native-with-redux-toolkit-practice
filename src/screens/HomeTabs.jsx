import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PrivateNotesList from '../features/private-notes/PrivateNoteList'
import { HomeIcon } from '../base-components/icons'

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="PrivateNote" component={PrivateNotesList} options={{ tabBarIcon: HomeIcon }} />
        </Tab.Navigator>
    )
}

export default HomeTabs

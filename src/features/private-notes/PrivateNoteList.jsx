import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useGetPrivateNotesQuery } from './privateNotesSlice'

let PrivateNoteExcerpt = ({ privateNote }) => {
    return (
        <TouchableOpacity
            // onPress={handleOnPress}
            // onLongPress={handleOnLongPress}
            activeOpacity={0.8}
            style={[
                styles.privateNoteExcerpt,
                // {
                //     backgroundColor: value?.theme?.background || defaultNoteColor.background,
                // },
            ]}
        >
            <View style={styles.privateNoteExcerptTitle}>
                <Text
                    style={[
                        styles.privateNoteExcerptTitleContent,
                        // { color: value?.theme?.text || defaultNoteColor.text }
                    ]}
                >
                    {privateNote?.title}
                </Text>
            </View>

            <Text
                style={[
                    styles.privateNoteExcerptBodyContent,
                    //  { color: value?.theme?.text || defaultNoteColor.text }
                ]}
            >
                {privateNote?.body}
            </Text>
        </TouchableOpacity>
    )
}

const PrivateNotesList = () => {
    const { data: privateNotes = [], isLoading, isSuccess, isError, error } = useGetPrivateNotesQuery()

    let content

    if (isLoading) {
        content = <ActivityIndicator />
    } else if (isSuccess) {
        content = (
            <FlatList
                data={privateNotes}
                keyExtractor={(item, index) => JSON.stringify(index)}
                renderItem={({ item: privateNote, index, separators }) => (
                    <PrivateNoteExcerpt key={privateNote?.id} privateNote={privateNote} />
                )}
                // ItemSeparatorComponent={renderItemSeparator}
                style={{ flex: 1, alignSelf: 'stretch' }}
            />
        )
    } else if (isError) {
        content = <Text>{error.message}</Text>
    }

    return (
        <View style={styles.container}>
            <Text>PrivateNoteList</Text>
            {content}
        </View>
    )
}

export default PrivateNotesList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'stretch',
        borderWidth: 1,
    },
    privateNoteExcerpt: {
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingRight: 16,
        marginHorizontal: 13,
        borderWidth: 1,
    },
    privateNoteExcerptTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 5,
    },
    privateNoteExcerptTitleContent: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    privateNoteExcerptBodyContent: {
        textAlign: 'justify',
    },
})

import Constants from 'expo-constants'

const { SERVER_API_URL } = Constants.manifest.extra

const getNote = (id) => {
    return fetch(`${SERVER_API_URL}/notes/private/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
}

const getNotes = () => {
    return fetch(`${SERVER_API_URL}/notes/private`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
}

const createNewSingleNote = (note, authToken) => {
    const bodyData = JSON.stringify({
        title: note?.title,
        body: note?.body,
        is_public: false,
        theme_id: note?.themeId,
    })

    return fetch(`${SERVER_API_URL}/notes`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        },
        body: bodyData,
    })
}

const deleteNotes = (noteIds, authToken) => {
    const bodyData = JSON.stringify({
        ids: noteIds,
    })

    return fetch(`${SERVER_API_URL}/notes/delete/by-ids`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        },
        body: bodyData,
    })
}

const privateNoteApi = {
    getNote,
    getNotes,
    createNewSingleNote,
    deleteNotes,
}

export default privateNoteApi

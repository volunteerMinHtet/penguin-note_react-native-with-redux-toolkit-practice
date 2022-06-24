import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Toast from 'react-native-root-toast'
import privateNoteApi from './privateNoteApi'

const initialState = {
    status: 'idle',
    value: [],
    message: null,
    meta: null,
    links: null,
    scrollTo: null,
}

// createAsyncThunk - get all notes from server
export const fetchNotes = createAsyncThunk('note/fetchNotes', async () => {
    try {
        const response = await privateNoteApi.getNotes()
        const json = await response.json()

        if (response.ok) {
            return {
                data: json?.data || [],
                message: json?.message,
            }
        }

        throw new Error(json?.message)
    } catch (error) {
        throw new Error('Oops, something went wrong to show notes!')
    }
})

// createAsyncThunk - create new note
export const createNewNote = createAsyncThunk(
    'note/createNewNote',
    async ({ note, authToken }, { rejectWithValue }) => {
        try {
            const response = await privateNoteApi.createNewSingleNote(note, authToken)
            const json = await response.json()

            if (response.ok) {
                Toast.show('Saved note', {
                    duration: Toast.durations.LONG,
                })

                return json
            } else {
                return rejectWithValue(json)
            }
        } catch (error) {
            return rejectWithValue({
                message: 'Oops, something went wrong to save note!',
            })
        }
    }
)

export const deleteNotes = createAsyncThunk(
    'note/deleteNotes',
    async ({ noteIds, authToken }, { rejectWithValue, dispatch }) => {
        try {
            const response = await privateNoteApi.deleteNotes(noteIds, authToken)
            const json = await response.json()

            if (response.ok) {
                Toast.show('Deleted notes', {
                    duration: Toast.durations.LONG,
                })

                dispatch(cancelSelectedNotes())
                return json
            } else {
                return rejectWithValue(json)
            }
        } catch (error) {
            Toast.show(error?.message || 'Oops, something went wrong to delete notes!', {
                duration: Toast.durations.LONG,
            })
            throw new Error('Oops, something went wrong to delete notes!')
        }

        // return {
        //     ids: noteIds,
        //     message: 'Deleted note(s)',
        // }
    }
)

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        pushNewNote: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        setNoteListScrollDirection: (state, action) => {
            state.meta.scroll.direction = action.payload
        },
        setSelectedNotes: (state, action) => {
            state.operation.type = 'selected'

            if (state.operation.noteIds.includes(action.payload)) {
                state.operation.noteIds = state.operation.noteIds.filter((id) => id !== action.payload)
            } else {
                state.operation.noteIds = [...state.operation.noteIds, action.payload]
            }
        },
        toggleSelectedAllNotes: (state, action) => {
            state.operation.type = 'selected'

            if (state.operation.noteIds.length === state.value.length) {
                state.operation.noteIds = []
            } else {
                state.operation.noteIds = state.value.map((note) => note.id)
            }
        },
        cancelSelectedNotes: (state) => {
            state.operation.type = null
            state.operation.noteIds = []
        },
    },
    extraReducers: (builder) => {
        builder
            // actions - get all notes from server - start
            .addCase(fetchNotes.pending, (state) => {
                state.status = 'loading'
                state.message = null
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value.push(action.payload.data)
                // state.value = [...state.value, ...action.payload.data]
                state.message = null
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.status = 'error'
                state.message = action.error.message
            })
        // actions - get all notes from server - end

        // actions - create a new note - start
        builder
            .addCase(createNewNote.pending, (state) => {
                state.status = 'loading'
                state.message = null
            })
            .addCase(createNewNote.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value = [...state.value, action.payload.data]
                state.message = null
            })
            .addCase(createNewNote.rejected, (state, action) => {
                state.status = 'error'
                state.message = action.payload.message
            })
        // actions - create a new note - end

        // actions - delete notes - start
        builder
            .addCase(deleteNotes.pending, (state) => {
                state
            })
            .addCase(deleteNotes.fulfilled, (state, action) => {
                console.log(action)
                state.value = state.value.filter((note) => !action.payload.data.includes(note.id))
                state.message = action.payload.message
            })
            .addCase(deleteNotes.rejected, (state, action) => {
                console.log(action)
                state.message = action.error.message
            })
        // actions - delete notes - end
    },
})

export const {
    pushNewNote,
    setNoteListScrollDirection,
    setSelectedNotes,
    cancelSelectedNotes,
    toggleSelectedAllNotes,
} = noteSlice.actions

export const selectNote = (state) => state.note
export const selectNoteOperation = (state) => state.note.operation
export const selectNoteMeta = (state) => state.note.meta

const noteReducer = noteSlice.reducer

export default noteReducer

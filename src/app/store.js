import { configureStore } from '@reduxjs/toolkit'

import rootReducers from './reducers'
import middleware from './middleware'

export default configureStore({
    reducer: {
        ...rootReducers,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([...middleware]),
})

import { apiSlice } from '../features/api/apiSlice'
import authReducer from '../features/auth/authSlice'

export default rootReducers = {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
}

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import {postAPI} from "../services/postService";


const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware)

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']
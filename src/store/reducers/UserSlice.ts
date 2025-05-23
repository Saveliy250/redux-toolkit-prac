import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreator";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error =
                    typeof action.payload === "string" ? action.payload : "Неизвестная ошибка";
            })
    }
})

export default userSlice.reducer;
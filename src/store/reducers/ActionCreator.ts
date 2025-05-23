import axios from "axios";
import {IUser} from "../../models/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";



export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/us2ers')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('не удалось загрузить')
        }
    }
)


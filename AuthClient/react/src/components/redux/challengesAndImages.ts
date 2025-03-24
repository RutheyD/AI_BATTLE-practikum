import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getTopImagesByChallenge=createAsyncThunk('topImagesByChallenge/get',async(_,thunkApi)=>{
try{
   /* const res =*/ await axios.get(`${API_BASE_URL}/api/Challenge/challenges`);
}catch(error){
    return thunkApi.rejectWithValue(error);
}
})
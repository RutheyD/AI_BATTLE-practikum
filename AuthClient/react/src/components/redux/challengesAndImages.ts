import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTopImagesByChallenge=createAsyncThunk('topImagesByChallenge/get',async(_,thunkApi)=>{
try{
    const res = await axios.get(`http://localhost:5037/api/Challenge/challenges`);
}catch(error){
    return thunkApi.rejectWithValue(error);
}
})
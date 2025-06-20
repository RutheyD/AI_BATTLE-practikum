import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ImageType } from "../models/images";
import { RootState } from "./store";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const getImageByChallengeId=createAsyncThunk('imagesByChallengeId/get',async(challengeId:number,thunkApi)=>{
    try{
const res=await axios.get(`${API_BASE_URL}/api/Image/challenge/${challengeId}`);
return res.data as ImageType[]
    }catch(error){
return thunkApi.rejectWithValue(error);
    }
})
export const getUserIdByImageId = createAsyncThunk(
    'image/getUserIdByImageId',
    async (imageId: number, thunkApi) => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/Image/GetUserIdByImageId/${imageId}`);
        return res.data;  
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );
  
export const addVote=createAsyncThunk('postVote/post',async({ userId, imageId ,challengeId}: { userId: number; imageId: number,challengeId:number },thunkApi)=>{
    try {
        const token =sessionStorage.getItem('token')
       await axios.post(`${API_BASE_URL}/api/Vote`, {
            userId,
            imageId
        },
           { headers: {
                Authorization: `Bearer ${token}`
            }}
    );
        const updatedImages = await thunkApi.dispatch(getImageByChallengeId(challengeId)).unwrap();
        return updatedImages; 
    }catch(error){
return thunkApi.rejectWithValue(error);
    }
})
export const deleteVote=createAsyncThunk('deleteVote/delete',async({ userId, imageId ,challengeId}: { userId: number; imageId: number ,challengeId:number},thunkApi)=>{
try{
    const token =sessionStorage.getItem('token')

    await axios.delete(`${API_BASE_URL}/api/Vote/deleteVote`, {
        data: { userId, imageId } ,  headers: {
         Authorization: `Bearer ${token}`
   },});
 
    const updatedImages = await thunkApi.dispatch(getImageByChallengeId(challengeId)).unwrap();
    return updatedImages;
}catch(error){
return thunkApi.rejectWithValue(error);
}
})
export const imageSlice = createSlice({
    name: 'images',
    initialState: {
      imagesByChallenge: [] as ImageType[],
      userId: null as number | null, 
      loading: true,
      error: null as string | null,
    },
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(getImageByChallengeId.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getImageByChallengeId.fulfilled, (state, action: PayloadAction<ImageType[]>) => {
          state.loading = false;
          state.error = null;
          state.imagesByChallenge = action.payload;
        })
        .addCase(getImageByChallengeId.rejected, (state) => {
          state.loading = false;
          state.error = 'Failed to load images';
        })
        .addCase(addVote.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(addVote.fulfilled, (state, action: PayloadAction<ImageType[]>) => {
          state.loading = false;
          state.error = null;
          state.imagesByChallenge = action.payload;
        })
        .addCase(addVote.rejected, (state) => {
          state.loading = false;
          state.error = 'Failed to add vote';
        })
        .addCase(deleteVote.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteVote.fulfilled, (state, action: PayloadAction<ImageType[]>) => {
          state.loading = false;
          state.error = null;
          state.imagesByChallenge = action.payload;
        })
        .addCase(deleteVote.rejected, (state) => {
          state.loading = false;
          state.error = 'Failed to delete vote';
        })
        .addCase(getUserIdByImageId.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getUserIdByImageId.fulfilled, (state, action: PayloadAction<number>) => {
          state.loading = false;
          state.error = null;
          state.userId = action.payload; 
        })
        .addCase(getUserIdByImageId.rejected, (state) => {
          state.loading = false;
          state.error = 'Failed to load user ID';
        });
    },
  });
  
  export const selectImagesByChallenge = (state: RootState) => state.images.imagesByChallenge;
  export const selectUserId = (state: RootState) => state.images.userId; 
  export const selectAddVote = (state: RootState) => state.images.imagesByChallenge;
  export const selectDeleteVote = (state: RootState) => state.images.imagesByChallenge;
  export const { actions } = imageSlice;
  export default imageSlice;
  

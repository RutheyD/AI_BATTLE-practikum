import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ChallengeType } from "../models/challenge";
import { TopImageType } from "../models/topImage";
import { RootState } from "./store";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const getTopImagesByChallenge = createAsyncThunk(
  'topImagesByChallenge/get',
  async (_, thunkApi) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/Challenge/finished`);
      const challenges = res.data as ChallengeType[];
      const challengesWithImages = await Promise.all(
        challenges.map(async (challenge) => {
          const imageRes = await axios.get(`${API_BASE_URL}/api/Image/top/challenge/${challenge.id}`);
          const topImage = imageRes.data
          return {
            id: topImage.id,
            userId: topImage.userId,
            userName: topImage.userName,
            challengeName: challenge.title,
            imageUrl: topImage.imageUrl,
            countVotes: topImage.countVotes,
            fileName: topImage.fileName

          };
        })
      );

      return challengesWithImages;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const topImageSlice = createSlice({
  name: 'topImages',
  initialState: {
      topImages: [] as TopImageType[],
      loading: true,
      error: null as string | null,
  },
  reducers: {},
  extraReducers(builder) {
      builder.addCase(getTopImagesByChallenge.pending, (state) => {
          state.loading = true;
          state.error = null;
      }).addCase(getTopImagesByChallenge.fulfilled, (state, action: PayloadAction<TopImageType[]>) => {
              state.loading = false;
              state.error = null;
              state.topImages = action.payload; 
          })
          .addCase(getTopImagesByChallenge.rejected, (state) => {
              state.loading = false;
              state.error = "Failed to load image "; 
          });
  },
});

export const selectTopImages = (state: RootState) => state.topImages.topImages;

export const { actions } = topImageSlice;
export default topImageSlice;


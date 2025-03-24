import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ChallengeType } from "../models/challenge";
import { RootState } from "./store";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const getChallenges = createAsyncThunk('challenges/get', async (_, thunkApi) => {
    try {
        const res = await axios.get(`${API_BASE_URL}/api/Challenge/challenges`);
        return res.data as ChallengeType[];
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
})

export const getChallengeById = createAsyncThunk('challengeId/get', async (challengeId: number, thunkApi) => {
    try {
        const res = await axios.get(`${API_BASE_URL}/api/Challenge/${challengeId}`)
        return res.data as ChallengeType;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
})

export const challengeSlice = createSlice({
    name: 'challenges',
    initialState: {
        list: [] as ChallengeType[],
        loading: true,
        error: null as string | null,
        selectedChallenge: null as ChallengeType | null, // New property
    },
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(getChallenges.pending, (state) => {
            state.loading = true,
                state.error = null
        }).addCase(getChallenges.fulfilled, (state, action: PayloadAction<ChallengeType[]>) => {
            state.loading = false,
                state.error = null,
                state.list = action.payload
        }).addCase(getChallenges.rejected, (state) => {
            state.loading = false,
                state.error = "Failed to load challenges"
        }).addCase(getChallengeById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(getChallengeById.fulfilled, (state, action: PayloadAction<ChallengeType>) => {
                state.loading = false;
                state.error = null;
                state.selectedChallenge = action.payload; 
            })
            .addCase(getChallengeById.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to load challenge by ID";
            });
    }
})
export const selectSelectedChallenge = (state: RootState) => state.challenges.selectedChallenge;
export const selectChallenges = (state: RootState) => state.challenges;
export const { actions } = challengeSlice;
export default challengeSlice;
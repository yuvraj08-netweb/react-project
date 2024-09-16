import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserList = createAsyncThunk(
  "user/getUserList",
  async ({ page = 1 }, thunkAPI) => {
    try {
      const response = await axios.get("https://reqres.in/api/users", {
        params: { page },
      });
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async ({ id = 1 }, thunkAPI) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      if (response.data) {
        console.log(response.data.data);
        return response.data.data;
      }
    } catch (error) {
        if (error.response && error.response.data) {
            return thunkAPI.rejectWithValue(error.response.data);
          } else {
            return thunkAPI.rejectWithValue(error.message); // Handle case where response is undefined
          }
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    dataById: [],
    loading: false,
    editLoading: false,
    page: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getUserList.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.dataById = action.payload;
      });
  },
});

export const { setPage } = userSlice.actions;

export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserList = createAsyncThunk(
  "user/getUserList",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:5000/user`, {
        params: {},
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
      const response = await axios.get(`http://localhost:5000/user?id=${id}`);

      if (response.data) {
        return response.data;
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
    showData: false,
  },
  reducers: {
    setShowData: (state, action) => {
      state.showData = action.payload;
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
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.dataById = action.payload;
      })
      .addCase(getUserById.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {setShowData } = userSlice.actions;

export default userSlice.reducer;

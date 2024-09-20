import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BaseUrl = "http://localhost:5000/user";

export const getUserList = createAsyncThunk(
  "user/getUserList",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${BaseUrl}`, {
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
      const response = await axios.get(`${BaseUrl}?id=${id}`);

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

export const getUserByName = createAsyncThunk(
  "user/getUserByName",
  async ({ userName }, thunkAPI) => {
    try {
      const response = await axios.get(`${BaseUrl}`, {
        params: { first_name_like: userName }, // Partial matching in json-server
      });

      if (response.data) {
        // Manually filter the results for case-insensitive matching
        const filteredData = response.data.filter((user) =>
          user.first_name.toLowerCase().includes(userName.toLowerCase())
        );

        return filteredData; // Return only case-insensitive matches
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

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ updatedData }, thunkAPI) => {
    try {
      const response = await axios.put(
        `${BaseUrl}/${updatedData?.id}`,
        updatedData
      );
      return response;
    } catch (error) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue(error.message); // Handle case where response is undefined
      }
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.delete(`${BaseUrl}/${id}`);
     
      return response;
    } catch (error) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue(error.message); // Handle case where response is undefined
      }
    }
  }
);

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userData, thunkAPI) => {
  

    try {
      const response = await axios.post(`${BaseUrl}`, userData);
      return response;
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
    dataByName: [],
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
      })
      .addCase(getUserByName.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserByName.fulfilled, (state, action) => {
        state.loading = false;
        state.dataByName = action.payload;
      })
      .addCase(getUserByName.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const deletedData = action.payload.data;

        const index = state.data.findIndex(
          (user) => user.id === deletedData.id
        );

        if (index !== -1) {
          state.data.splice(index, 1);
        }
      });
  },
});

export const { setShowData } = userSlice.actions;

export default userSlice.reducer;

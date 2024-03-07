

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65e7733c53d564627a8ed4d7.mockapi.io/';

 const getBrandsCars = createAsyncThunk(
  'api/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/brands');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getCarById = createAsyncThunk(
  'api/getCarById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/brands/${id}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export default getBrandsCars; 
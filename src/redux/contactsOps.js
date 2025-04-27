import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://680e4c34c47cb8074d92ab5f.mockapi.io';

export const fetchData = createAsyncThunk('fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const postData = createAsyncThunk('post', async (contact, thunkAPI) => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteData = createAsyncThunk('delete', async (id, thunkAPI) => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

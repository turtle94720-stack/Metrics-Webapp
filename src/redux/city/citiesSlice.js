import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCities = createAsyncThunk('fetchCities', async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b9e7a20a692f33e96fe34111a643f76`);
  const data = await response.json();
  return data;
});

const citiesSlice = createSlice({
  name: 'city',
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.fulfilled, (state, action) => action.payload);
  },
});

export default citiesSlice.reducer;

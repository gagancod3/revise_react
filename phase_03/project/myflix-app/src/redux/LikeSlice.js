import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchLikes = createAsyncThunk('like/fetchLikes', async () => {
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve(42); // Fake like count
    //     }, 1500);
    // });
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    // Use title length as fake like count
    return response.data.title.length;
});
 
const likeSlice = createSlice({
  name: 'like',
  initialState: {
    value: 0,
    status:'idle'
  },
  reducers: {
    addLike: state => {
      state.value += 1
    },
   
  },
  extraReducers: (builder) => {
        builder
            .addCase(fetchLikes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLikes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.value = action.payload;
            })
            .addCase(fetchLikes.rejected, (state) => {
                state.status = 'failed';
            });
    }
})
 
export const { addLike} = likeSlice.actions
export default likeSlice.reducer;
import { configureStore } from '@reduxjs/toolkit'
import likeReducer, { fetchLikes } from './LikeSlice';
 
const store = configureStore({
    reducer: {
        like: likeReducer
    }
})
store.dispatch(fetchLikes());
export default store;

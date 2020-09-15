import { createSlice } from '@reduxjs/toolkit';
// import { auth } from '../../app/firebase'
//i know theres a library for this but i wanted to try
//doing it myself
export const authSlice = createSlice(
    {
        name: 'auth',
        initialState: {
            user: null//IDK
        },
        reducers: {
            setUser: (state, action) => {
                state.user = action.payload;
            }            
        }
    }
);

export const { setUser } = authSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAuth = state => state.auth.user;


export default authSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        login: state => {
            state.value += 1
        },
        logout: (state, action) => {
            state.value += action.payload;
        }
    }
});

export const {login, logout} = userSlice.actions;

export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(logout(amount));
    }, 1000)
};

export const selectUser = state => state.user.user;

export default userSlice.reducer;
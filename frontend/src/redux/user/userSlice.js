import { createSlice } from "@reduxjs/toolkit";
// step3. create state slice with create slice function and add initial state

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // action: reducerFunction() => {}
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

// export actions
export const {signInStart, signInSuccess, signInFailure} = userSlice.actions;
// export reducer
export default userSlice.reducer;

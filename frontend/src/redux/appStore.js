import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';

// step1. create a store with configure store function
const appStore = configureStore({
    reducer: {
        // step4: add slice reducers to the redux store
        user: userReducer,
    },
});

export default appStore;
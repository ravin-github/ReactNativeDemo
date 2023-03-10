import {createSlice} from '@reduxjs/toolkit';

const initialState = {
loading:false,
loggedIn: false,
location:null
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAction: state => {
      state.loading = true;
    },
    loginActionSuccess: (state, action) => {
      state.loading = false;
      state.loggedIn  = action.payload
    },
  },
});

export const {
  actions: {
    loginAction,
    loginActionSuccess,
    loginActionFailure,
  },
  reducer: authReducer,
} = auth;

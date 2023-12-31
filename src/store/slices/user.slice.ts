import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IUserSlice} from '../../types/slices/user';
import {ILoginRequest} from '../../types/common';
import {AsyncThunkConfig} from '..';

// import test data
import { testUserData } from '../../assets/testData';

const initialState: IUserSlice = {
  isLoggedIn: false,
  userName: 'test',
  userData: []
};

export const loginRequest = createAsyncThunk<
  any,
  ILoginRequest,
  AsyncThunkConfig
>('user/loginRequest', async ({userName}, {dispatch, getState}) => {
    try {
        console.log('login request = ', userName);
        // TODO: connect to backend
        
        return {userName};
    } catch(e) {
        console.log('login error = ', e)
    }
});

export const readUserData = createAsyncThunk<
  any,
  void,
  AsyncThunkConfig
>('user/readUserData', async (_ ,{dispatch, getState}) => {
    try {
        // TODO: connect to BE
        const userList = testUserData;

        return userList
    } catch(e) {
        console.log('login error = ', e)
    }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginRequest.fulfilled, (state, action) => {
        console.log('userName = ', action.payload.userName);
        state.userName = action.payload.userName
      })
      .addCase(loginRequest.rejected, (_state, {error}) => {
        console.log('login request error = ', error)
      })
      .addCase(readUserData.fulfilled, (state, action) => {
        state.userData = action.payload
      })
      .addCase(readUserData.rejected, (_state, {error}) => {
        console.log('readUserData error = ', error)
      })
  },
});

export const {updateUser} = userSlice.actions;

export default userSlice.reducer;

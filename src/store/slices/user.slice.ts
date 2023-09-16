import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IUserSlice} from '../../types/slices/user';
import {ILoginRequest} from '../../types/common';
import {AsyncThunkConfig} from '..';

const initialState: IUserSlice = {
  isLoggedIn: false,
  userName: 'test',
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
      });
  },
});

export const {updateUser} = userSlice.actions;

export default userSlice.reducer;

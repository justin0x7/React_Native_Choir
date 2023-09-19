import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ICommentSlice} from '../../types/slices/comment';
import {AsyncThunkConfig} from '..';

// import test data
import { testCommentsData } from '../../assets/testData';

const initialState: ICommentSlice = {
  commentData: []
};

export const readCommentData = createAsyncThunk<
  any,
  void,
  AsyncThunkConfig
>('comment/readCommentData', async (_ ,{dispatch, getState}) => {
    try {
        // TODO: connect to BE
        const commentList = testCommentsData;

        return commentList
    } catch(e) {
        console.log('commentList error = ', e)
    }
});

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    // updateArticle(state, action) {
    //   state.articleName = action.payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(readCommentData.fulfilled, (state, action) => {
        state.commentData = action.payload
      })
      .addCase(readCommentData.rejected, (_state, {error}) => {
        console.log('readUserData error = ', error)
      })
  },
});

// export const {updateUser} = articleSlice.actions;

export default commentSlice.reducer;

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IArticleSlice} from '../../types/slices/article';
import {AsyncThunkConfig} from '..';

// import test data
import { testArticleData } from '../../assets/testData';

const initialState: IArticleSlice = {
  articleData: []
};

export const readArticleData = createAsyncThunk<
  any,
  void,
  AsyncThunkConfig
>('article/readArticleData', async (_ ,{dispatch, getState}) => {
    try {
        // TODO: connect to BE
        const articleList = testArticleData;

        return articleList
    } catch(e) {
        console.log('article error = ', e)
    }
});

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    // updateArticle(state, action) {
    //   state.articleName = action.payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(readArticleData.fulfilled, (state, action) => {
        state.articleData = action.payload
      })
      .addCase(readArticleData.rejected, (_state, {error}) => {
        console.log('readUserData error = ', error)
      })
  },
});

// export const {updateUser} = articleSlice.actions;

export default articleSlice.reducer;

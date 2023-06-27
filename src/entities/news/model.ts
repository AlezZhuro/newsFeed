import {
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';

import {UrlPaths, httpClient} from 'shared/api';

const sliceKey = 'newsSlice';

const initialState: StateType = {
  selectedItem: null,
  list: [],
};

const newsSlice = createSlice({
  name: sliceKey,
  initialState,
  reducers: {
    setList: (state, {payload}: PayloadAction<NewsListItem[]>) => {
      state.list = payload;
    },
    setSelectedItem: (state, {payload}: PayloadAction<NewsListItem>) => {
      state.selectedItem = payload;
    },
  },
});

const fetchNewsList = createAsyncThunk(`${sliceKey}/fetchList`, async () => {
  try {
    const response = await httpClient.get<NewsListItem[]>(UrlPaths.NewsList);

    newsModel.setList(response.data);
  } catch (error: any) {
    console.error('fetchNewsList:', error.message);
  }
});

const newsSelectedItemSelector = createSelector(
  (state: RootState) => state.news.selectedItem,
  item => item,
);

const newsListSelector = createSelector(
  (state: RootState) => state.news.list,
  list => list,
);

export const newsReducer = newsSlice.reducer;

export const newsModel = {
  ...newsSlice.actions,
  selectors: {
    list: newsListSelector,
    item: newsSelectedItemSelector,
  },
  fetchNewsList,
};

type StateType = {
  selectedItem: null | NewsListItem;
  list: NewsListItem[];
};

export type NewsListItem = {
  id: number;
  title: string;
  image_url: string;
  image_additional_url: string;
  body: string;
  short_text: string;
  created_at: Date;
  category: null | string;
  icon: null | string;
  model_name: string;
  table_name: string;
};

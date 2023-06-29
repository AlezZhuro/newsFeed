import {
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';

import {UrlPaths, httpClient} from 'shared/api';
import {NewsListDTO} from 'shared/api/types';

const sliceKey = 'newsSlice';

const initialState: StateType = {
  selectedItem: null,
  list: [],
  pagination: {
    page: 1,
    perPage: 10,
    totalItems: 10,
  },
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
    setPage: (state, {payload}: PayloadAction<number>) => {
      state.pagination.page = payload;
    },
    setPagination: (state, {payload}: PayloadAction<any>) => {
      state.pagination = {...state.pagination, ...payload};
    },
  },
});

const fetchNewsList = createAsyncThunk(
  `${sliceKey}/fetchNewsList`,
  async (_, {dispatch}) => {
    try {
      const response = await httpClient.get<NewsListDTO<NewsListItem>>(
        UrlPaths.NewsList,
        {page: 1},
      );
      if (response.ok) {
        response?.data && dispatch(newsModel.setList(response.data.news));
      }
    } catch (error: any) {
      console.error('fetchNewsList:', error.message);
    }
  },
);

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
  pagination: {
    page: number;
    totalItems: number;
    perPage: number;
  };
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
  model_name: keyof ModelName;
  table_name: string;
};

enum ModelName {
  News = 'News',
}

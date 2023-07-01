import {
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';

import {UrlPaths, httpClient} from 'shared/api';
import {NewsListDTO} from 'shared/api/types';
import {showAlertWithError} from 'shared/lib';

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
    setSelectedItem: (state, {payload}: PayloadAction<NewsItem>) => {
      state.selectedItem = payload;
    },
  },
});

const fetchNewsList = createAsyncThunk(
  `${sliceKey}/fetchNewsList`,
  async (_, {dispatch}) => {
    try {
      const response = await httpClient.get<NewsListDTO<NewsListItem[]>>(
        UrlPaths.NewsList,
        {page: 1},
      );
      if (response.ok) {
        response?.data && dispatch(newsModel.setList(response.data.news));
      }
    } catch (error: any) {
      showAlertWithError(error);
    }
  },
);

const fetchNewsByID = createAsyncThunk(
  `${sliceKey}/fetchNewsByID`,
  async (id: number, {fulfillWithValue}) => {
    try {
      const response = await httpClient.get<NewsListDTO<NewsItem>>(
        `${UrlPaths.NewsList}/${id}`,
      );

      if (response.ok) {
        return fulfillWithValue(response.data?.news);
      }
    } catch (error: any) {
      showAlertWithError(error);
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
  fetchNewsByID,
};

type StateType = {
  selectedItem: null | NewsItem;
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
  model_name: `${ModelName}`;
  table_name: string;
};

export interface NewsItem extends NewsListItem {}

enum ModelName {
  News = 'News',
}

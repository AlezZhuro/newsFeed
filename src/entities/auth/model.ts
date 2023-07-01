import {
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';

import {
  UrlPaths,
  httpClient,
  redirectToSignScreen,
  showAlertWithError,
} from 'shared';
import {AuthSuccessDTO} from 'shared/api/types';

const sliceKey = 'authSlice';

const initialState: StateType = {
  isLogged: false,
  user: undefined,
};

const authSlice = createSlice({
  name: sliceKey,
  initialState,
  reducers: {
    successAuth: (state, {payload}: PayloadAction<UserType>) => {
      state.isLogged = true;
      state.user = payload;
    },
    setIsLogged: (state, {payload}: PayloadAction<boolean>) => {
      state.isLogged = payload;
    },
    logoutAction: state => {
      state = initialState;
    },
  },
});

const login = createAsyncThunk(
  `${sliceKey}/login`,
  async ({email, password}: {email: string; password: string}, {dispatch}) => {
    try {
      const res = await httpClient.post<AuthSuccessDTO<UserType>>(
        UrlPaths.SignIn,
        {email, password},
      );

      if (res.ok && res.data) {
        dispatch(authModel.successAuth(res.data.user));
        return true;
      }
    } catch (error: any) {
      return false;
    }
  },
);

const logout = createAsyncThunk(`${sliceKey}/logout`, async (_, {dispatch}) => {
  dispatch(authModel.logoutAction());
  await redirectToSignScreen();
});

const refreshUser = createAsyncThunk(
  `${sliceKey}/refreshUser`,
  async (_, {dispatch}) => {
    try {
      const res = await httpClient.get<AuthSuccessDTO<UserType>>(
        UrlPaths.RefreshUser,
      );
      if (res.ok && res.data) {
        dispatch(authModel.successAuth(res.data.user));
      }
    } catch (error: any) {
      showAlertWithError(error);
    }
  },
);

const isLoggedSelector = createSelector(
  (state: RootState) => state.auth.isLogged,
  item => item,
);

const userSelector = createSelector(
  (state: RootState) => state.auth.user,
  item => item,
);

export const authModel = {
  ...authSlice.actions,
  selectors: {
    isLogged: isLoggedSelector,
    user: userSelector,
  },
  login,
  logout,
  refreshUser,
};
export const authReducer = authSlice.reducer;

type StateType = {
  isLogged: boolean;
  user: UserType | undefined;
};

type UserType = {
  id: number;
  username: string;
  avatar_url: string;
  avatar_cropped_big_url: string;
  position: string;
  email: string;
  phone_city: string;
  phone_city_ext: string;
  phone_mobile: string;
  avatar_original_url: string;
  registered: boolean;
  user_like_status: {
    name: string;
    number: string;
    range: string;
    range_human: string;
    description: string;
  };
  points_total: number;
  unit_name: string;
  grade_sheet_pdf_url: string;
  user_incoming_likes_count: number;
  user_week_incoming_likes_count: number;
  card_loyalty_exist: boolean;
  card_loyalty_barcode_data: null;
  user_unit: null;
  can_evacuation: boolean;
  game_character_id: null;
  unit_head: boolean;
  roles: [string];
  cinemas: [];
  vacation_days: number;
};

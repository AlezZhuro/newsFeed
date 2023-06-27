import {createSelector, createSlice} from '@reduxjs/toolkit';

const sliceKey = 'authSlice';

const initialState: StateType = {
  isLogged: false,
  accessToken: undefined,
  client: undefined,
  uid: undefined,
};

const authSlice = createSlice({
  name: sliceKey,
  initialState,
  reducers: {
    logout: state => {
      state = initialState;
    },
  },
});

const isLoggedSelector = createSelector(
  (state: RootState) => state.auth.isLogged,
  item => item,
);

export const authModel = {
  ...authSlice.actions,
  selectors: {
    isLogged: isLoggedSelector,
  },
};
export const authReducer = authSlice.reducer;

type StateType = {
  isLogged: boolean;
  accessToken: string | undefined;
  client: string | undefined;
  uid: string | undefined;
};

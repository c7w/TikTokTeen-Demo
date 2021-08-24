import {configureStore, createSlice} from '@reduxjs/toolkit';

const DataSlice = createSlice({
  name: 'data',
  initialState: {
    loggedIn: false,
    role: '',
    childProps: {
      id: 123,
      uesrname: 'c7w',
      uniqueId: '114514',
      verified: true,
      watchedTime: 0,
    },
    parentProps: {
      id: 123,
      username: 'c7w',
      alreadyBind: true,
      watchedTime: 10086,
    },
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setChildProps: (state, action) => {
      state.childProps = action.payload;
    },
    setParentProps: (state, action) => {
      state.parentProps = action.payload;
    },
  },
});

export const {setLoggedIn, setRole, setChildProps, setParentProps} =
  DataSlice.actions;

export default configureStore({
  reducer: {data: DataSlice.reducer},
});

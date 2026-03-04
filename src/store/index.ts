import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import modalReducer from './reducers/modalSlice';
import api from '../services/api';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMidlleware) =>
    getDefaultMidlleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

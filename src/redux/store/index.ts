import { configureStore } from '@reduxjs/toolkit';
import faqReducer from '../slices/faqSlice';
import reviewsReducer from '../slices/reviewsSlice';
import columnsReducer from '../slices/columnsSlice';

const store = configureStore({
  reducer: {
    faq: faqReducer,
    reviews: reviewsReducer,
    columns: columnsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

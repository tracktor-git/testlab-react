import { configureStore } from '@reduxjs/toolkit';
import faqReducer from '../slices/faqSlice';
import reviewsReducer from '../slices/reviewsSlice';

const store = configureStore({
  reducer: {
    faq: faqReducer,
    reviews: reviewsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

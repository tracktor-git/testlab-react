import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SlideProps } from '../../Components/Reviews/Slide';

type ReviewsData = SlideProps & { id: number }

type ReviewsState = ReviewsData[];
const initialState: ReviewsState = [];

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews(state, action: PayloadAction<ReviewsState>) {
      state.push(...action.payload);
    },
  },
});

export const { setReviews } = reviewsSlice.actions;

export default reviewsSlice.reducer;

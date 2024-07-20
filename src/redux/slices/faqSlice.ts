import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AccordionData } from '../../Components/Faq/Accordion';

type FaqState = AccordionData[];
const initialState: FaqState = [];

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    setFaq(state, action: PayloadAction<FaqState>) {
      state.push(...action.payload);
    },
  },
});

export const { setFaq } = faqSlice.actions;

export default faqSlice.reducer;

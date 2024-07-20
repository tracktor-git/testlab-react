import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ColumnItemProps } from '../../Components/Columns/ColumnItem';

type ColumnsData = ColumnItemProps & { id: number }
type ColumnsState = ColumnsData[];
const initialState: ColumnsState = [];

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    setColumns(state, action: PayloadAction<ColumnsState>) {
      state.push(...action.payload);
    },
  },
});

export const { setColumns } = columnsSlice.actions;

export default columnsSlice.reducer;

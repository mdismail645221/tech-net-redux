import { createSlice } from '@reduxjs/toolkit';

interface IProduct {
  status: boolean;
  priceRange: number;
}

const initialState: IProduct = {
  status: false,
  priceRange: 150,
};

const productSlice = createSlice({
  name: 'productFilter',
  initialState,
  reducers: {
    priceStatus: (state) => {
      state.status = !state.status;
    },
    priceToggle: (state, action) => {
      state.priceRange = action.payload;
    },
  },
});

export const { priceToggle, priceStatus } = productSlice.actions;
export default productSlice.reducer;

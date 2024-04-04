import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  product: null,
  isError: false,
};

export const getProduct = createAsyncThunk(
  'productSlice/getProduct',
  async page => {
    let res = await fetch(
      `https://dummyjson.com/products?skip=${page + 9}&limit=12`
    );
    let result = await res.json();
    console.log(result);
    return result.products;
  }
);

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,

  extraReducers: builder => {
    builder.addCase(getProduct.pending, (state, action) => {});
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.isError = false;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default productSlice.reducer;

export const usersSelector = state => state.product;

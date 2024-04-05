import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  product: null,
  isError: false,
};

export const getProduct = createAsyncThunk(
  'productSlice/getProduct',
  async (page, { getState }) => {
    let res = await fetch(
      `https://dummyjson.com/products?skip=${page + 9}&limit=12`
    );
    let result = await res.json();
    console.log(result);
    return result.products;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    sortProducts: (state, action) => {
      state.product.sort((a, b) => {
        if ((action.payload === 'price') | (action.payload === 'stock')) {
          if (a[action.payload] > b[action.payload]) {
            return -1;
          } else {
            return 1;
          }
        } else {
          if (
            a[action.payload].toString().toLowerCase() >
            b[action.payload].toString().toLowerCase()
          ) {
            return action.payload === 'title' ? 1 : -1;
          } else {
            return action.payload === 'title' ? -1 : 1;
          }
        }
      });
    },
  },

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

export const { sortProducts } = productSlice.actions;

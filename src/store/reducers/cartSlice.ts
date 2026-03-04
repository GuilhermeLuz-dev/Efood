import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProductType = {
  title: string;
  image: string;
  description: string;
  id: number;
  preco: number;
};

interface CartState {
  items: ProductType[];
  isOpen: boolean;
  step: string;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cartList',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductType>) => {
      state.items.push(action.payload);
      state.isOpen = true;
    },
    removeItem: (state, action: PayloadAction<ProductType>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    closeCartDrawer: (state) => {
      state.isOpen = false;
    },
    openCartDrawer: (state) => {
      state.isOpen = true;
    },
    goToFormAndress: (state) => {
      state.step = 'formAndress';
    },
    goToFormPayment: (state) => {
      state.step = 'formPayment';
    },
    goToCartList: (state) => {
      state.step = 'cartList';
    },
    goToFinish: (state) => {
      state.step = 'finish';
    },
  },
});

export const {
  addItem,
  removeItem,
  closeCartDrawer,
  openCartDrawer,
  goToFormAndress,
  goToFormPayment,
  goToCartList,
  goToFinish,
} = cartSlice.actions;
export default cartSlice.reducer;

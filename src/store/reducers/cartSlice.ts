import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProductType = {
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
    clearCart: (state) => {
      state.items = [];
    },
    closeCartDrawer: (state) => {
      state.isOpen = false;
    },
    openCartDrawer: (state) => {
      state.isOpen = true;
    },
    goToFormAddress: (state) => {
      state.step = 'formAddress';
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
  goToFormAddress,
  goToFormPayment,
  goToCartList,
  goToFinish,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProductType = {
  title: string;
  image: string;
  description: string;
  id: number;
  preco: number;
};

interface ModalState {
  item: ProductType;
  isShowing: boolean;
}

const initialState: ModalState = {
  item: { description: '', id: 0, image: '', preco: 0, title: '' },
  isShowing: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    addProductModal: (state, action: PayloadAction<ProductType>) => {
      state.item = action.payload;
      state.isShowing = true;
    },
    removeProductModal: (state) => {
      state.item = { description: '', id: 0, image: '', preco: 0, title: '' };
      state.isShowing = false;
    },
  },
});

export const { addProductModal, removeProductModal } = modalSlice.actions;
export default modalSlice.reducer;

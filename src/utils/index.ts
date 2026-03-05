import { ProductType } from '../store/reducers/cartSlice';

export const getTotalPrice = (produto: ProductType[]) => {
  return produto.reduce((accumulator, currentProduct) => {
    if (currentProduct.preco) {
      return (accumulator += currentProduct.preco);
    }
    return 0;
  }, 0);
};

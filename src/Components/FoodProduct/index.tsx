import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../store/cartSlice';
import { addProductModal, removeProductModal } from '../../store/modalSlice';
import { useState } from 'react';

import { Card, CardTitle, Description } from './style';
import { RootState } from '../../store';
import { Button } from '../../style';

type Props = {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
  preco: number;
};

const FoodProduct = ({ description, image, title, preco, id }: Props) => {
  const dispatch = useDispatch();
  const showingModal = useSelector((state: RootState) => state.modal.isShowing);

  const [added, setAdded] = useState(false);

  const addToCart = () => {
    dispatch(addItem({ image, description, title, preco, id }));
    setAdded(true);
  };

  const removeToCart = () => {
    dispatch(removeItem({ image, description, title, preco, id }));
    setAdded(false);
  };

  const openModal = () => {
    dispatch(addProductModal({ image, description, title, preco, id }));
  };
  const closeModal = () => {
    dispatch(removeProductModal({ image, description, title, preco, id }));
  };

  return (
    <Card>
      <img src={image} alt="" onClick={showingModal ? closeModal : openModal} />
      <CardTitle>{title} </CardTitle>
      <Description>{description}</Description>
      <Button onClick={added ? removeToCart : addToCart}>
        {added ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
      </Button>
    </Card>
  );
};
export default FoodProduct;

import { useDispatch, useSelector } from 'react-redux';
import {
  addProductModal,
  removeProductModal,
} from '../../store/reducers/modalSlice';

import { Card, CardTitle, Description } from './style';
import { RootState } from '../../store';
import { Button } from '../../style';

type Props = {
  id: number;
  title: string;
  image: string;
  description: string;
  preco: number;
};

const FoodProduct = ({ description, image, title, preco, id }: Props) => {
  const dispatch = useDispatch();
  const showingModal = useSelector((state: RootState) => state.modal.isShowing);

  const openModal = () => {
    dispatch(addProductModal({ image, description, title, preco, id }));
  };
  const closeModal = () => {
    dispatch(removeProductModal());
  };

  const getDescription = (description: string) => {
    return description.slice(0, 132) + '...';
  };

  return (
    <Card>
      <img src={image} alt="" />
      <CardTitle>{title}</CardTitle>
      <Description>{getDescription(description)}</Description>
      <Button onClick={showingModal ? closeModal : openModal}>
        Comprar produto
      </Button>
    </Card>
  );
};
export default FoodProduct;

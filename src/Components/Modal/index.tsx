import { Button } from '../../style';
import { removeProductModal } from '../../store/reducers/modalSlice';
import { addItem, goToCartList } from '../../store/reducers/cartSlice';
import {
  ModalContainer,
  Image,
  ModalTitle,
  Description,
  OverLay,
  CloseIcon,
} from './stye';

import closeIcon from '../../assets/images/close.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

const Modal = () => {
  const isShowing = useSelector((state: RootState) => state.modal.isShowing);
  const { description, id, image, preco, title } = useSelector(
    (state: RootState) => state.modal.item
  );
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ image, description, title, preco, id }));
    dispatch(removeProductModal());
    dispatch(goToCartList());
  };

  return (
    <>
      <OverLay isShowingModal={isShowing} />
      <ModalContainer isShowingModal={isShowing}>
        <CloseIcon
          src={closeIcon}
          onClick={() => dispatch(removeProductModal())}
        />
        <Image>
          <img src={image} alt="" />
        </Image>
        <div>
          <ModalTitle>{title}</ModalTitle>
          <Description>{description}</Description>
          <p>Serve: de 2 a 3 pessoas</p>
          <Button onClick={addToCart}>
            Adicionar ao carrinho - R$ {preco}
          </Button>
        </div>
      </ModalContainer>
    </>
  );
};

export default Modal;

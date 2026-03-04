import { Button } from '../../style';
import { removeProductModal } from '../../store/reducers/modalSlice';
import { addItem } from '../../store/reducers/cartSlice';
import {
  ModalContainer,
  Image,
  ModalTitle,
  Description,
  OverLay,
  CloseIcon,
} from './stye';

import modalImage from '../../assets/images/la_doce.png';
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
    dispatch(removeProductModal({ description, id, image, preco, title }));
  };

  return (
    <>
      <OverLay isShowingModal={isShowing} />
      <ModalContainer isShowingModal={isShowing}>
        <CloseIcon
          src={closeIcon}
          onClick={() =>
            dispatch(
              removeProductModal({ description, id, image, preco, title })
            )
          }
        />
        <Image>
          <img src={modalImage} alt="" />
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

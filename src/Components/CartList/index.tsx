import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  CallToAction,
  CartDrawerList,
  ImageContainer,
  InfosContainer,
  Item,
  TotalValue,
} from './style';

import lixeira from '../../assets/images/lixeira.svg';
import { removeItem, goToFormAndress } from '../../store/reducers/cartSlice';

const CartDrawer = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      <CartDrawerList>
        {items.map((item, index) => (
          <Item key={index}>
            <ImageContainer>
              <img src={item.image} alt={item.title} />
            </ImageContainer>
            <InfosContainer>
              <h3>{item.title}</h3>
              <p>R$ {item.preco}</p>
            </InfosContainer>
            <img
              onClick={() => dispatch(removeItem(item))}
              src={lixeira}
              alt="Lixeira icon"
            />
          </Item>
        ))}
      </CartDrawerList>
      <TotalValue>
        <p>Valor total</p>
        <span>R$ 182,70</span>
      </TotalValue>
      <CallToAction onClick={() => dispatch(goToFormAndress())}>
        Continuar com a entrega
      </CallToAction>
    </>
  );
};

export default CartDrawer;

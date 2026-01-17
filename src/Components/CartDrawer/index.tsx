import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { DrawerContainer, Overlay } from './style';

import { closeCartDrawer } from '../../store/cartSlice';
import CartList from '../CartList';
import FormAndress from '../FormAndress';
import FormPayment from '../FormPayment';
import Finish from '../Finish';

export type Props = {
  isOpen: boolean;
};

const CartDrawer = ({ isOpen }: Props) => {
  const step = useSelector((state: RootState) => state.cart.step);
  const dispatch = useDispatch();

  return (
    <>
      <Overlay isOpen={isOpen} onClick={() => dispatch(closeCartDrawer())} />
      <DrawerContainer isOpen={isOpen}>
        {step === 'cartList' && <CartList />}
        {step === 'formAndress' && <FormAndress />}
        {step === 'formPayment' && <FormPayment />}
        {step === 'finish' && <Finish />}
      </DrawerContainer>
    </>
  );
};

export default CartDrawer;

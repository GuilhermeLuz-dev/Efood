import { useDispatch } from 'react-redux';

import { Button, FormTitle } from '../../style';
import { PurchaseProps } from '../../services/api';

import {
  clearCart,
  closeCartDrawer,
  goToCartList,
} from '../../store/reducers/cartSlice';

import { FinishContainer } from './style';

type Props = {
  data: PurchaseProps;
};

const Finish = ({ data }: Props) => {
  const dispatch = useDispatch();
  return (
    <FinishContainer>
      <FormTitle>Pedido Realizado - {data.orderId}</FormTitle>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </p>
      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
      <Button
        onClick={() => {
          dispatch(closeCartDrawer());
          dispatch(goToCartList());
          dispatch(clearCart());
        }}
      >
        Concluir
      </Button>
    </FinishContainer>
  );
};

export default Finish;

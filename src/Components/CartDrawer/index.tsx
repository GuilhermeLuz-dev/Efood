import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { DrawerContainer, Overlay } from './style';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { clearCart, closeCartDrawer } from '../../store/reducers/cartSlice';
import CartList from '../CartList';
import FormAddress from '../FormAndress';
import FormPayment from '../FormPayment';
import Finish from '../Finish';
import { usePurchaseMutation } from '../../services/api';

export type Props = {
  isOpen: boolean;
};
export interface CheckoutFormValues {
  fullName: string;
  address: string;
  city: string;
  cep: string;
  number: number;
  complement: string;
  cardName: string;
  cardNumber: string;
  cardCode: number;
  expiresMonth: number;
  expiresYear: number;
}

const CartDrawer = ({ isOpen }: Props) => {
  const step = useSelector((state: RootState) => state.cart.step);
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [purchase, { data, isSuccess, reset }] = usePurchaseMutation();

  const form = useFormik<CheckoutFormValues>({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: 0,
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: 0,
      expiresMonth: 0,
      expiresYear: 0,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O campo precisa ter o mínimo de 5 caracteres')
        .required('Esse campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O campo precisa ter o mínimo de 5 caracteres')
        .required('Esse campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O campo precisa ter o mínimo de 5 caracteres')
        .required('Esse campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O cep deve ter no mínimo 8 digitos')
        .max(9, 'O cep deve ter no máximo 8 digitos')
        .required('Esse campo é obrigatório'),
      number: Yup.number().min(1).required('Esse campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(5, 'O campo precisa ter o mínimo de 5 caracteres')
        .required('Esse campo é obrigatório'),
      cardCode: Yup.number().required('Esse campo é obrigatório'),
      expiresMonth: Yup.number().required('Esse campo é obrigatório'),
      expiresYear: Yup.number().required('Esse campo é obrigatório'),
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco,
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            city: values.city,
            complement: values.complement,
            description: values.complement,
            number: values.number,
            zipCode: values.cep,
          },
        },
        payment: {
          card: {
            code: values.cardCode,
            name: values.cardName,
            number: values.cardNumber,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear,
            },
          },
        },
      });
    },
  });

  const handleFinish = () => {
    dispatch(closeCartDrawer());
    if (isSuccess) {
      reset();
      dispatch(clearCart());
    }
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClick={handleFinish} />
      <DrawerContainer isOpen={isOpen}>
        {isSuccess && data ? (
          <Finish data={data} reset={reset} />
        ) : (
          <>
            {step === 'cartList' && <CartList />}
            {step === 'formAddress' && <FormAddress form={form} />}
            {step === 'formPayment' && <FormPayment form={form} />}
          </>
        )}
      </DrawerContainer>
    </>
  );
};

export default CartDrawer;

import { FormikProps } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { FormTitle } from '../../style';

import { RootState } from '../../store';
import { goToFormAddress, goToFinish } from '../../store/reducers/cartSlice';

import { ButtonContainer, Form, InputContainer } from './style';
import { CheckoutFormValues } from '../CartDrawer';
import { getTotalPrice } from '../../utils';

type Props = {
  form: FormikProps<CheckoutFormValues>;
};

const FormPayment = ({ form }: Props) => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const checkInputHasError = (fildName: string) => {
    const isTouched = fildName in form.touched;
    const isError = fildName in form.errors;

    const hasError = isError && isTouched;

    return hasError;
  };

  return (
    <>
      <FormTitle>Pagamento - Valor a pagar R$ {getTotalPrice(items)}</FormTitle>
      <Form onSubmit={form.handleSubmit}>
        <label htmlFor="cardName">Nome no cartão</label>
        <input
          id="cardName"
          type="name"
          name="cardName"
          placeholder="nome:"
          value={form.values.cardName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputHasError('cardName') ? 'error' : ''}
        />
        <InputContainer>
          <div>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              id="cardNumber"
              name="cardNumber"
              type="number"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cardNumber') ? 'error' : ''}
            />
          </div>
          <div>
            <label htmlFor="cardCode">CVV</label>
            <input
              id="cardCode"
              name="cardCode"
              type="number"
              value={form.values.cardCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cardCode') ? 'error' : ''}
            />
          </div>
        </InputContainer>
        <InputContainer>
          <div>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input
              id="expiresMonth"
              name="expiresMonth"
              type="number"
              value={form.values.expiresMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('expiresMonth') ? 'error' : ''}
            />
          </div>
          <div>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input
              id="expiresYear"
              name="expiresYear"
              type="number"
              value={form.values.expiresYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('expiresYear') ? 'error' : ''}
            />
          </div>
        </InputContainer>
      </Form>
      <ButtonContainer>
        <button
          type="submit"
          onClick={() => {
            form.handleSubmit();
            dispatch(goToFinish());
          }}
        >
          Finalizar pagamento
        </button>
        <button onClick={() => dispatch(goToFormAddress())}>
          Voltar para edição de endereço
        </button>
      </ButtonContainer>
    </>
  );
};

export default FormPayment;

import { FormikProps } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { IMaskInput } from 'react-imask';

import { FormTitle } from '../../style';

import { RootState } from '../../store';
import { goToFinish, goToFormAddress } from '../../store/reducers/cartSlice';

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

  const handleContinue = async () => {
    const errors = await form.validateForm();

    const hasErrors = !!(
      errors.cardName ||
      errors.cardNumber ||
      errors.cardCode ||
      errors.expiresMonth ||
      errors.expiresYear
    );

    const isMissingFields =
      !form.values.cardName ||
      !form.values.cardCode ||
      !form.values.cardNumber ||
      !form.values.expiresMonth ||
      !form.values.expiresYear;

    if (!hasErrors && !isMissingFields) {
      form.handleSubmit();
      dispatch(goToFinish());
    } else {
      form.setTouched({
        cardCode: true,
        cardName: true,
        cardNumber: true,
        expiresMonth: true,
        expiresYear: true,
      });
    }
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
          value={form.values.cardName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputHasError('cardName') ? 'error' : ''}
        />
        <InputContainer>
          <div>
            <label htmlFor="cardNumber">Número do cartão</label>
            <IMaskInput
              id="cardNumber"
              name="cardNumber"
              type="text"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cardNumber') ? 'error' : ''}
              mask="0000 0000 0000 0000"
            />
          </div>
          <div>
            <label htmlFor="cardCode">CVV</label>
            <IMaskInput
              id="cardCode"
              name="cardCode"
              type="text"
              value={form.values.cardCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cardCode') ? 'error' : ''}
              mask="000"
            />
          </div>
        </InputContainer>
        <InputContainer>
          <div>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <IMaskInput
              id="expiresMonth"
              name="expiresMonth"
              type="text"
              value={form.values.expiresMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('expiresMonth') ? 'error' : ''}
              mask="00"
            />
          </div>
          <div>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <IMaskInput
              id="expiresYear"
              name="expiresYear"
              type="text"
              value={form.values.expiresYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('expiresYear') ? 'error' : ''}
              mask="00"
            />
          </div>
        </InputContainer>
      </Form>
      <ButtonContainer>
        <button type="submit" onClick={handleContinue}>
          finalizar pagamento
        </button>
        <button type="button" onClick={() => dispatch(goToFormAddress())}>
          Voltar para edição de endereço
        </button>
      </ButtonContainer>
    </>
  );
};

export default FormPayment;

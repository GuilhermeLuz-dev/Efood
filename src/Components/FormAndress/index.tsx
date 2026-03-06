import { useDispatch } from 'react-redux';
import { FormikProps } from 'formik';

import { CheckoutFormValues } from '../CartDrawer';
import { FormTitle } from '../../style';

import { goToFormPayment, goToCartList } from '../../store/reducers/cartSlice';

import { ButtonContainer, Form, InputContainer } from './style';

type Props = {
  form: FormikProps<CheckoutFormValues>;
};
const FormAddress = ({ form }: Props) => {
  const dispatch = useDispatch();

  const checkInputHasError = (fildName: string) => {
    const isTouched = fildName in form.touched;
    const isError = fildName in form.errors;

    const hasError = isError && isTouched;

    return hasError;
  };

  const validateForm = () => {
    const formValid = !!(
      form.errors['fullName'] ||
      form.errors['address'] ||
      form.errors['city'] ||
      form.errors['cep'] ||
      form.errors['number']
    );

    return !formValid;
  };
  return (
    <>
      <FormTitle>Entrega</FormTitle>
      <Form onSubmit={form.handleSubmit}>
        <label htmlFor="fullName">Quem irá receber</label>
        <input
          id="fullName"
          type="name"
          placeholder="nome:"
          value={form.values.fullName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputHasError('fullName') ? 'error' : ''}
        />
        <label htmlFor="address">Endereço</label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="nome:"
          value={form.values.address}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputHasError('address') ? 'error' : ''}
        />
        <label htmlFor="city">Cidade</label>
        <input
          id="city"
          name="city"
          type="text"
          value={form.values.city}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputHasError('city') ? 'error' : ''}
        />
        <InputContainer>
          <div>
            <label htmlFor="cep">CEP</label>
            <input
              id="cep"
              name="cep"
              type="text"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cep') ? 'error' : ''}
            />
          </div>
          <div>
            <label htmlFor="number">Número</label>
            <input
              id="number"
              name="number"
              type="number"
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('number') ? 'error' : ''}
            />
          </div>
        </InputContainer>
        <label htmlFor="complement">Complemento (Opicional)</label>
        <input
          id="complement"
          name="complement"
          type="text"
          value={form.values.complement}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputHasError('complement') ? 'error' : ''}
        />
      </Form>
      <ButtonContainer>
        <button
          onClick={() => {
            dispatch(goToFormPayment());
          }}
          disabled={validateForm() ? false : true}
        >
          Continuar com o pagamento
        </button>
        <button onClick={() => dispatch(goToCartList())}>
          Voltar para o carrinho
        </button>
      </ButtonContainer>
    </>
  );
};

export default FormAddress;

import { useDispatch } from 'react-redux';
import { goToFormAndress, goToFinish } from '../../store/reducers/cartSlice';
import { FormTitle } from '../../style';
import { ButtonContainer, Form, InputContainer } from './style';

const FormPayment = () => {
  const dispatch = useDispatch();
  return (
    <>
      <FormTitle>Pagamento</FormTitle>
      <Form action="">
        <label htmlFor="">Nome no cartão</label>
        <input type="text" placeholder="nome:" />
        <InputContainer>
          <div>
            <label htmlFor="">Número do cartão</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="">CVV</label>
            <input type="number" />
          </div>
        </InputContainer>
        <InputContainer>
          <div>
            <label htmlFor="">Mês de vencimento</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="">Ano de vencimento</label>
            <input type="number" />
          </div>
        </InputContainer>
      </Form>
      <ButtonContainer>
        <button onClick={() => dispatch(goToFinish())}>
          Finalizar pagamento
        </button>
        <button onClick={() => dispatch(goToFormAndress())}>
          Voltar para edição de endereço
        </button>
      </ButtonContainer>
    </>
  );
};

export default FormPayment;

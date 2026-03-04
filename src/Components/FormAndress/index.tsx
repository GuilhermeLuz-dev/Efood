import { useDispatch } from 'react-redux';
import { goToFormPayment, goToCartList } from '../../store/reducers/cartSlice';
import { FormTitle } from '../../style';
import { ButtonContainer, Form, InputContainer } from './style';

const FormAndress = () => {
  const dispatch = useDispatch();
  return (
    <>
      <FormTitle>Entrega</FormTitle>
      <Form action="">
        <label htmlFor="">Quem irá receber</label>
        <input type="text" placeholder="nome:" />
        <label htmlFor="">Endereço</label>
        <input type="text" />
        <label htmlFor="">Cidade</label>
        <input type="text" />
        <InputContainer>
          <div>
            <label htmlFor="">CEP</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="">Número</label>
            <input type="number" />
          </div>
        </InputContainer>
        <label htmlFor="">Complemento (Opicional)</label>
        <input type="text" />
      </Form>
      <ButtonContainer>
        <button onClick={() => dispatch(goToFormPayment())}>
          Continuar com o pagamento
        </button>
        <button onClick={() => dispatch(goToCartList())}>
          Voltar para o carrinho
        </button>
      </ButtonContainer>
    </>
  );
};

export default FormAndress;

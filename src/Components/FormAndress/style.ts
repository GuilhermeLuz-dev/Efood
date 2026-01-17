import styled from 'styled-components';
import { colors } from '../../style';

export const Form = styled.form`
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-bottom: 24px;
  input {
    padding: 8px;
    background-color: ${colors.lightPink};
    border: none;
    margin: 8px 0;
  }
  label {
    font-size: 14px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  div > input {
    width: 155px;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  button {
    color: ${colors.pink};
    padding: 4px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
  }
`;

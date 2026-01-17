import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
  pink: '#E66767',
  lightPink: '#FFEBD9',
  lightPinkPlus: '#FFF8F2',
  white: '#fff',
  transparentBlack: 'rgba(0,0,0, 0.5)',
};

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Roboto', sans-serif;
    }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  p {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 4px 0;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.pink};
  display: block;
  text-align: center;
  border: none;
  cursor: pointer;
`;

export const FormTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${colors.white};
`;

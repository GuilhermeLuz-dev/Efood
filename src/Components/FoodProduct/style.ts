import styled from 'styled-components';
import { colors } from '../../style';

export const Card = styled.div`
  color: ${colors.white};
  background-color: ${colors.pink};
  padding: 8px;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 100%;
    max-width: 304px;
    max-height: 167px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

export const Description = styled.p`
  font-size: 14px;
  margin: 0 0 8px 0;
  flex-grow: 1;
`;

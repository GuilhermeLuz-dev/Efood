import styled from 'styled-components';
import { colors } from '../../style';
import { TagContainer } from '../Tag/style';

export const Card = styled.div`
  color: ${colors.white};
  background-color: ${colors.pink};
  padding: 8px;
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
`;

export const Description = styled.p`
  font-size: 14px;
  margin: 16px 0;
`;

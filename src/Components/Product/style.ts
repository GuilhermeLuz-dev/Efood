import styled from 'styled-components';
import { colors } from '../../style';

export const Card = styled.div`
  position: relative;
  color: ${colors.pink};
  img {
    width: 100%;
  }
`;

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const InfosContainer = styled.div`
  position: relative;
  margin-top: -4px;
  padding: 8px;
  border: 1px solid ${colors.pink};
  border-top: none;
`;

export const Review = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 14px;
  margin: 16px 0;
`;

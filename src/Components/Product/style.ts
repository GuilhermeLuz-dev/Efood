import styled from 'styled-components';
import { colors } from '../../style';

export const Card = styled.div`
  position: relative;
  color: ${colors.pink};
  height: 424px;
  img {
    max-height: 217px;
    width: 100%;
    object-fit: cover;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  margin-top: -4px;
  border: 1px solid ${colors.pink};
  border-top: none;
  background-color: ${colors.white};
  height: 207px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
  button {
    padding: 4px 6px;
    font-size: 14px;
    font-weight: bold;
    background-color: ${colors.pink};
    color: ${colors.white};
    text-align: center;
    border: none;
    cursor: pointer;
  }
`;

export const Review = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`;

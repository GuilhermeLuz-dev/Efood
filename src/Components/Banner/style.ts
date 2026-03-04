import styled from 'styled-components';
import { colors, Container } from '../../style';

import { Props } from '.';

export const BannerContainer = styled.div<Omit<Props, 'title' | 'category'>>`
  position: relative;
  padding: 25px 0 32px 0;
  background-image: url(${(props) => (props ? props.image : '')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${colors.white};
  font-size: 32px;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5); /* preto 50% */
    z-index: 1;
  }

  h2 {
    margin: 0;
    font-size: 32px;
  }

  ${Container} {
    display: flex;
    flex-direction: column;
    gap: 156px;
  }
`;

export const Category = styled.h2`
  font-weight: 100;
  position: relative;
  z-index: 2;
`;

export const Title = styled.h2`
  font-wight: 900;
  position: relative;
  z-index: 2;
`;

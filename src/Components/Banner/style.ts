import styled from 'styled-components';
import { colors, Container } from '../../style';

import bannerImage from '../../assets/images/la_doce.png';

export const BannerContainer = styled.div`
  position: relative;
  padding: 25px 0 32px 0;
  background-image: url(${bannerImage});
  background-size: cover;
  background-repeat: no-repeat;
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

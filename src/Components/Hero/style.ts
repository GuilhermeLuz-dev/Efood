import styled from 'styled-components';

import heroImage from '../../assets/images/hero.png';
import { colors } from '../../style';

export const Container = styled.div`
  background-image: url('${heroImage}');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 0px;
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 138px;
  }
`;

export const TitleHero = styled.h1`
  max-width: 550px;
  color: ${colors.pink};
  font-size: 36px;
  font-weight: bold;
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
`;

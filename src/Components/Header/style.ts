import styled from 'styled-components';

import heroImage from '../../assets/images/hero.png';
import { colors, Container } from '../../style';

export const HeaderContainer = styled.div`
  background-image: url('${heroImage}');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 63px 0 65px 0;
  color: ${colors.pink};
  font-size: 18px;
  font-weight: 900;

  ${Container} {
    display: flex;
    justify-content: space-between;
  }
`;

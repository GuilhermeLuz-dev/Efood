import styled from 'styled-components';
import { colors, Container } from '../../style';

export const FooterContainer = styled.section`
  padding: 40px 0;
  background-color: ${colors.lightPink};
  color: ${colors.pink};
  ${Container} {
    text-align: center;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 125px;
  max-height: 57px;
  margin-bottom: 32.5px;
`;

export const SocialMidias = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
`;

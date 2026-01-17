import { Container } from '../../style';

import logo from '../../assets/images/logo.svg';
import instagram from '../../assets/images/instagram.svg';
import twitter from '../../assets/images/twitter.svg';
import facebook from '../../assets/images/facebook.svg';
import { FooterContainer, Logo, SocialMidias } from './style';

const Footer = () => (
  <FooterContainer>
    <Container>
      <Logo src={logo} alt="" />
      <SocialMidias>
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
      </SocialMidias>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </Container>
  </FooterContainer>
);

export default Footer;

import { Container, TitleHero, Logo } from './style';

import logo from '../../assets/images/logo.png';

const Hero = () => (
  <>
    <Container>
      <div className="container">
        <Logo src={logo} alt="Logo" />
        <TitleHero>
          Viva experiências gastronômicas no conforto da sua casa
        </TitleHero>
      </div>
    </Container>
  </>
);

export default Hero;

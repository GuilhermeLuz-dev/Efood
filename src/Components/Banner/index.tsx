import { Container } from '../../style';
import { BannerContainer, Category, Title } from './style';

export type Props = {
  category: string;
  title: string;
  image: string;
};

const Banner = ({ category, image, title }: Props) => (
  <BannerContainer image={image}>
    <Container>
      <Category>{category}</Category>
      <Title>{title}</Title>
    </Container>
  </BannerContainer>
);

export default Banner;

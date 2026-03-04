import { Container } from '../../style';
import { GridContainer, ProductsGridContainer } from './style';

export type Props = {
  children: React.ReactNode;
  profile?: boolean;
};

const ProductsGrid = ({ children, profile }: Props) => (
  <ProductsGridContainer>
    <Container>
      <GridContainer profile={profile}>{children}</GridContainer>
    </Container>
  </ProductsGridContainer>
);

export default ProductsGrid;

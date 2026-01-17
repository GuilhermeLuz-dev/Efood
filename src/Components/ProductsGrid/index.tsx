import Product from '../Product';
import { GridContainer, ProductsGridContainer } from './style';
import { Container } from '../../style';

import Food from '../../Models/Food';
import FoodProduct from '../FoodProduct';

export type Props = {
  products: Food[];
  profile?: boolean;
};

const ProductsGrid = ({ products, profile }: Props) => (
  <ProductsGridContainer>
    <Container>
      <GridContainer profile={profile}>
        {profile
          ? products.map((product, index) => (
              <FoodProduct
                description={product.description}
                title={product.title}
                image={product.image}
                link={product.link}
                id={product.id}
                preco={product.preco}
                key={index}
              />
            ))
          : products.map((product) => (
              <Product
                description={product.description}
                title={product.title}
                tags={product.tags}
                image={product.image}
                score={product.score}
                link={product.link}
                key={product.id}
              />
            ))}
      </GridContainer>
    </Container>
  </ProductsGridContainer>
);

export default ProductsGrid;

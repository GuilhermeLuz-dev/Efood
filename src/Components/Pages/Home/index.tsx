import { useGetAllRestaurantsQuery } from '../../../services/api';
import Hero from '../../Hero';
import Product from '../../Product';
import ProductsGrid from '../../ProductsGrid';

const Home = () => {
  const { data } = useGetAllRestaurantsQuery();
  if (!data) return <h2>Carregando...</h2>;

  return (
    <>
      <Hero />
      <ProductsGrid>
        {data.map((product) => (
          <Product
            description={product.descricao}
            title={product.titulo}
            tipo={product.tipo}
            image={product.capa}
            score={product.avaliacao}
            destaque={product.destacado}
            id={product.id}
            key={product.id}
          />
        ))}
      </ProductsGrid>
    </>
  );
};

export default Home;

import { useParams } from 'react-router-dom';
import { useGetAllRestaurantsQuery } from '../../../services/api';

import Food from '../../../Models/Food';
import Banner from '../../Banner';
import Header from '../../Header';
import ProductsGrid from '../../ProductsGrid';

import image from '../../../assets/images/marguerita.png';
import CartDrawer from '../../CartDrawer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import Modal from '../../Modal';
import FoodProduct from '../../FoodProduct';

const Profile = () => {
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const { id } = useParams();
  const { data } = useGetAllRestaurantsQuery();
  if (!data) return <h2>Carregando...</h2>;

  const currentRestaurant = data.find(
    (restaurant) => restaurant.id == Number(id)
  );
  if (!currentRestaurant) return <h2>Carregando...</h2>;

  return (
    <>
      <Header />
      <Banner
        image={currentRestaurant.capa}
        category={currentRestaurant.tipo}
        title={currentRestaurant.titulo}
      />
      <ProductsGrid profile={true}>
        {currentRestaurant.cardapio.map((product, index) => (
          <FoodProduct
            description={product.descricao}
            title={product.nome}
            image={product.foto}
            id={product.id}
            preco={product.preco}
            key={index}
          />
        ))}
      </ProductsGrid>
      <CartDrawer isOpen={isOpen} />
      <Modal />
    </>
  );
};

export default Profile;

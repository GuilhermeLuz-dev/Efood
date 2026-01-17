import Food from '../../../Models/Food';
import Banner from '../../Banner';
import Header from '../../Header';
import ProductsGrid from '../../ProductsGrid';

import image from '../../../assets/images/marguerita.png';
import CartDrawer from '../../CartDrawer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import Modal from '../../Modal';

const products: Food[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image,
    link: '/',
    title: 'Pizza Marguerita',
    preco: 60.9,
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image,
    link: '/',
    title: 'Pizza Marguerita',
    preco: 90.5,
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image,
    link: '/',
    title: 'Pizza Marguerita',
    preco: 40.5,
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image,
    link: '/',
    title: 'Pizza Marguerita',
    preco: 30.5,
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image,
    link: '/',
    title: 'Pizza Marguerita',
    preco: 90.5,
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image,
    link: '/',
    title: 'Pizza Marguerita',
    preco: 90.5,
  },
];

const Profile = () => {
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  return (
    <>
      <Header />
      <Banner />
      <ProductsGrid products={products} profile={true} />
      <CartDrawer isOpen={isOpen} />
      <Modal />
    </>
  );
};

export default Profile;

import Food from '../../../Models/Food';
import Hero from '../../Hero';
import ProductsGrid from '../../ProductsGrid';

import la_doce from '../../../assets/images/la_doce.png';
import hioki_sushi from '../../../assets/images/hioki_sushi.png';

const products: Food[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: hioki_sushi,
    link: '/profile',
    score: 4.9,
    tags: ['Destaque da semana', 'Japonesa'],
    preco: 0,
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: la_doce,
    link: '/profile',
    score: 4.6,
    tags: ['Italiana'],
    preco: 0,
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: la_doce,
    link: '/profile',
    score: 4.6,
    tags: ['Italiana'],
    preco: 0,
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: la_doce,
    link: '/profile',
    score: 4.6,
    tags: ['Italiana'],
    preco: 0,
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: la_doce,
    link: '/profile',
    score: 4.6,
    tags: ['Italiana'],
    preco: 0,
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: la_doce,
    link: '/profile',
    score: 4.6,
    tags: ['Italiana'],
    preco: 0,
  },
];
const Home = () => (
  <>
    <Hero />
    <ProductsGrid products={products} profile={false} />
  </>
);

export default Home;

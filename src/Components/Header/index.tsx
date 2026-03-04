import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

import { openCartDrawer } from '../../store/reducers/cartSlice';

import { Container } from '../../style';
import { HeaderContainer } from './style';

import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <Container>
        <h3>Restaurantes</h3>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <p onClick={() => dispatch(openCartDrawer())}>
          {items.length} produto(s) no carrinho
        </p>
      </Container>
    </HeaderContainer>
  );
};

export default Header;

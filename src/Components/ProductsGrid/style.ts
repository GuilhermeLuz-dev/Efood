import styled from 'styled-components';
import { colors } from '../../style';

import { Props } from '.';

export const ProductsGridContainer = styled.div`
  background-color: ${colors.lightPinkPlus};
  padding: 80px 0 120px 0;
`;

export const GridContainer = styled.div<Omit<Props, 'products'>>`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.profile ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)'};
  grid-gap: ${(props) => (props.profile ? '32px' : '80px 48px')};
`;

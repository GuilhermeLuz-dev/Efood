import styled from 'styled-components';
import { colors } from '../../style';

import { Props } from '.';

export const DrawerContainer = styled.div<Props>`
  width: 360px;
  background-color: ${colors.pink};
  padding: 32px 8px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: ${(props) => (props.isOpen ? '0' : '-400px')};
  z-index: 3;
  trasition: 0.5s ease;
`;

export const Overlay = styled.div<Props>`
  display: ${(props) => (props.isOpen ? 'inline' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colors.transparentBlack};
  z-index: 2;
`;

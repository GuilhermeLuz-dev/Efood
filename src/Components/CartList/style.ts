import styled from 'styled-components';
import { colors } from '../../style';

type Props = {
  isOpen: boolean;
};

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

export const CartDrawerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
  padding: 0;
`;

export const Item = styled.li`
  position: relative;
  background-color: ${colors.lightPink};
  color: ${colors.pink};
  display: flex;
  gap: 8px;
  padding: 8px;
  list-style: none;

  & > img {
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfosContainer = styled.div`
  h3 {
    margin: 0 0 16px 0;
  }
`;

export const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.white};
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const CallToAction = styled.button`
  width: 100%;
  padding: 4px 0;
  color: ${colors.pink};
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

import styled from 'styled-components';
import { Button, colors } from '../../style';
type Props = {
  isShowingModal: boolean;
};

export const ModalContainer = styled.div<Props>`
  display: ${(props) => (props.isShowingModal ? 'flex' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1024px;
  padding: 32px;
  gap: 24px;
  background-color: ${colors.pink};
  color: ${colors.white};
  font-size: 14px;
  z-index: 9;

  ${Button} {
    margin-top: 16px;
    max-width: 250px;
    padding: 4px 7px;
  }
`;

export const Image = styled.div`
  width: 280px;
  height: 280px;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 900;
`;

export const Description = styled.p`
  margin: 16px 0;
`;

export const OverLay = styled.div<Props>`
  display: ${(props) => (props.isShowingModal ? 'inline' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colors.transparentBlack};
  z-index: 2;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

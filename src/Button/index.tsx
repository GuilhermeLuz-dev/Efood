import { ButtonHTMLAttributes } from 'react';
import { ButtonStyle } from './style';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  type: 'button';
};

const Button = ({ children, onClick, type }: Props) => (
  <ButtonStyle type={type}>{children}</ButtonStyle>
);

export default Button;

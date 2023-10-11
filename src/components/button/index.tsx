import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind: 'light' | 'dark';
  children: React.ReactNode;
}

const Button = ({ kind, children, ...props }: ButtonProps) => {
  return (
    <Wrapper kind={kind} {...props}>
      {children}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button<{ kind: string }>`
  cursor: pointer;
  border-radius: 20px;
  font-size: 28px;
  font-weight: 600;
  color: ${({ color, theme }) =>
    color === 'light' ? theme.colors.purple[800] : theme.colors.gray[100]};
  background-color: ${({ color, theme }) =>
    color == 'light' ? theme.colors.gray[100] : theme.colors.purple[700]};
  padding: 16px 54px;
  transition: all 0.1s linear;
  &:hover {
    color: ${({ color, theme }) =>
      color === 'light' ? theme.colors.purple[900] : theme.colors.gray[200]};
    background-color: ${({ color, theme }) =>
      color == 'light' ? theme.colors.gray[200] : theme.colors.purple[800]};
  }
  &:active {
    color: ${({ color, theme }) =>
      color === 'light' ? theme.colors.purple[700] : theme.colors.gray[50]};
    background-color: ${({ color, theme }) =>
      color == 'light' ? theme.colors.gray[50] : theme.colors.purple[600]};
  }
`;

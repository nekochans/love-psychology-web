import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

type Props = {
  disabled: boolean;
  to?: string;
  onClick?: () => void;
};

const NextButton: FC<Props> = ({ to, disabled, children, onClick }) => {
  const button = (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );

  if (to) {
    return <Link to="/result">{button}</Link>;
  }

  return button;
};

type StyledButtonProps = {
  disabled: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  background-color: ${props =>
    props.disabled ? theme.bg.disabled : theme.colors.pink};
  border: none;
  border-radius: 8px;
  color: ${theme.text.reverse};
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 24px;
  padding: 16px;
  text-decoration: none;
`;

export default NextButton;

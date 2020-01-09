import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const Footer: FC = () => {
  return <Foot>Copyright (c) 2020 nekochans</Foot>;
};

export const Foot = styled.div`
  background-color: ${theme.bg.alt};
  color: ${theme.text.secondary};
  display: flex;
  flex: none;
  justify-content: center;
  padding: 32px;
`;

export default Footer;

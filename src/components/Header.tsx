import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const Header: FC = () => {
  return <Head>愛の心理学</Head>;
};
export default Header;

const Head = styled.div`
  align-items: center;
  background-color: ${theme.colors.pink};
  color: ${theme.colors.white};
  padding: 4px 8px;
  text-align: center;
`;

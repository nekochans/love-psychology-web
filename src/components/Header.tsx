import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const Header: FC = () => {
  return <Head>愛の心理学</Head>;
};
export default Header;

const Head = styled.div`
  background-color: ${theme.colors.pink};
  align-items: center;
  color: ${theme.colors.white};
  text-align: center;
  padding: 4px 8px;
`;

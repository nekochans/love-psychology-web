import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const Loading: FC = () => {
  return <StyledLoading>Loading...</StyledLoading>;
};

const StyledLoading = styled.h3`
  color: ${theme.text.alt};
  text-align: center;
`;

export default Loading;

import React, { FC } from 'react';
import styled from 'styled-components';
import { LoveType } from '../../domain/result';
import { theme } from '../../theme';

type Props = {
  loveType: LoveType;
};

const ResultSection: FC<Props> = ({ loveType }) => {
  return (
    <StyledResultSection>
      <Caption>あなたの恋人や片思いの人への愛の形は</Caption>
      {loveType && (
        <Content>
          <Type>{loveType.type}</Type>
          <Description>{loveType.description}</Description>
          <Description>{loveType.message}</Description>
        </Content>
      )}
    </StyledResultSection>
  );
};

const StyledResultSection = styled.div`
  margin: 20px;
  text-align: center;
`;

const Caption = styled.p`
  color: ${theme.text.alt};
  font-size: 14px;
  margin: 4em auto 1em;
`;

const Content = styled.div`
  padding: 12px 0 12px;
`;

const Type = styled.h3`
  color: ${theme.text.default};
  font-size: 24px;
  font-weight: 600;
  margin: 10px 0 10px;
`;

const Description = styled.p`
  color: ${theme.text.secondary};
  font-size: 18px;
  font-weight: 400;
  margin: 1em auto 1em;
  max-width: 500px;
`;
export default ResultSection;

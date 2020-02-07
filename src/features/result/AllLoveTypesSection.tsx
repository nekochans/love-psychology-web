import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { LoveType } from '../../domain/result';
import { theme } from '../../theme';

type Props = {
  loveTypes?: LoveType[];
};

const AllLoveTypesSection: FC<Props> = ({ loveTypes }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const onClicked = () => {
    setIsListOpen(true);
  };

  return (
    <StyledAllLoveTypeSection>
      {!isListOpen && (
        <StyledButton onClick={onClicked}>
          その他の恋愛タイプを表示する
        </StyledButton>
      )}
      <LoveTypesList isListOpen={isListOpen}>
        {loveTypes &&
          isListOpen &&
          loveTypes.map(loveType => (
            <LoveTypesListItem key={loveType.type}>
              <Type>{loveType.type}</Type>
              <Description>{loveType.description}</Description>
              <Description>{loveType.message}</Description>
            </LoveTypesListItem>
          ))}
      </LoveTypesList>
    </StyledAllLoveTypeSection>
  );
};

type LoveTypesListProps = {
  isListOpen: boolean;
};

const StyledAllLoveTypeSection = styled.div`
  margin: 20px;
  text-align: center;
`;

const LoveTypesList = styled.ul<LoveTypesListProps>`
  height: ${props => (props.isListOpen ? 'auto' : 0)};
  list-style-type: none;
  margin: ${props => (props.isListOpen ? '30px 0 30px' : '0')};
  opacity: ${props => (props.isListOpen ? 1 : 0)};
  padding: 0;
  transition: 0.8s;
`;

const LoveTypesListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

const Type = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 1em auto 1em;
  max-width: 500px;
  text-align: center;
`;

const Description = styled.p`
  color: ${theme.text.secondary};
  font-size: 16px;
  font-weight: 400;
  margin: 1em auto 1em;
  max-width: 500px;
  text-align: center;
`;

const StyledButton = styled.button`
  align-items: center;
  background: transparent;
  border: 1px solid ${theme.bg.border};
  border-radius: 32px;
  color: ${theme.text.secondary};
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 24px;
  padding: 10px 16px;
  text-decoration: none;
`;

export default AllLoveTypesSection;

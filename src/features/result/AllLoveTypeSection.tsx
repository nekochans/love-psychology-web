import React, { FC } from 'react';
import styled from 'styled-components';
import { LoveType } from '../../domain/result';

type Props = {
  loveTypes?: LoveType[];
};

const AllLoveTypeSection: FC<Props> = ({ loveTypes }) => {
  return (
    <StyledAllLoveTypeSection>
      <button type="button">その他の恋愛タイプを表示する</button>
      <ul>
        {loveTypes &&
          loveTypes.map(loveType => (
            <li key={loveType.type}>{loveType.type}</li>
          ))}
      </ul>
    </StyledAllLoveTypeSection>
  );
};

const StyledAllLoveTypeSection = styled.div`
  margin: 20px;
  text-align: center;
`;
export default AllLoveTypeSection;

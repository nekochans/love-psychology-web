import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';
import { MOBILE_BREAK } from '../theme/layout';

const Home: FC = () => {
  return (
    <Section>
      <Content>
        <Text>
          <Tagline>愛の三角理論</Tagline>
          <ThisCopy>愛の三角形理論についての解説を追加する。</ThisCopy>
          <ThisCopy>
            1行目。あああああああああああああああああああああああああああああああああああああああああああ。
          </ThisCopy>
          <ThisCopy>
            2行目。あああああああああああああああああああああああああああああああああああああああああああ。
          </ThisCopy>
          <ThisCopy>
            3行目。あああああああああああああああああああああああああああああああああああああああああああ。
          </ThisCopy>
          <ThisCopy>
            4行目。あああああああああああああああああああああああああああああああああああああああああああ。
          </ThisCopy>
        </Text>

        <Elements>
          <ElementSection>
            <div>
              <Element>親密性（intimacy）</Element>
              <ElementDescription>
                親密性についての解説を追加する。あああああああああああああああああああああああああああああああああああああああああああ。
              </ElementDescription>
            </div>
          </ElementSection>

          <ElementSection>
            <div>
              <Element>情熱（passion）</Element>
              <ElementDescription>
                情熱についての解説を追加する。あああああああああああああああああああああああああああああああああああああああああああ。
              </ElementDescription>
            </div>
          </ElementSection>

          <ElementSection>
            <div>
              <Element>コミットメント（commitment）</Element>
              <ElementDescription>
                コミットメントについての解説を追加する。あああああああああああああああああああああああああああああああああああああああああああ。
              </ElementDescription>
            </div>
          </ElementSection>
        </Elements>
      </Content>
      <AnalysisLink to="/analysis">
        <span>診断する！</span>
      </AnalysisLink>
    </Section>
  );
};

// Section
const Section = styled.div`
  align-items: center;
  background-color: ${theme.bg.default};
  color: ${theme.text.default};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  align-items: flex-start;
  margin: 20px 32px 20px 32px;
  position: relative;
  text-align: left;
  z-index: 2;

  @media (max-width: ${MOBILE_BREAK}px) {
    align-items: center;
    margin-bottom: 16px;
    margin-top: 0;
    text-align: center;
  }

  @media (max-width: 1200px) {
    right: 0;
  }
`;

const Tagline = styled.h2`
  color: ${theme.text.default};
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 32px;
  margin-top: 16px;
  text-align: center;

  @media (max-width: ${MOBILE_BREAK}px) {
    font-size: 24px;
  }
`;

const ThisCopy = styled.p`
  color: ${theme.text.default};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  margin: 0;
  max-width: 580px;
  padding: 0;

  &:not(:first-of-type) {
    margin-top: 16px;
  }

  @media (max-width: ${MOBILE_BREAK}px) {
    text-align: left;
  }
`;

// 3つの要素
export const ElementSection = styled.div`
  background-color: ${theme.bg.default};
  border: 3px solid ${theme.colors.pink};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin: auto;
  max-width: 480px;
  padding: 26px;
  z-index: 1;

  /* 580 - 16*2 */
  @media (max-width: 548px) {
    margin: 0 8px;
    max-width: 100%;
    padding: 15px 10px 15px;
  }
`;

export const Elements = styled.div`
  display: grid;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  grid-template-areas: 'one two three';
  grid-template-columns: minmax(400, auto) minmax(400, auto) minmax(400, auto);
  justify-content: center;
  justify-items: stretch;
  max-width: 100%;
  padding: 30px 5% 30px;

  > div {
    justify-content: space-between;
    margin: 0;
    min-width: 280px;

    &:first-of-type {
      justify-self: center;
    }
  }

  @media (max-width: 1334px) {
    grid-row-gap: 32px;
    grid-template-areas: 'one' 'two' 'three';
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content min-content;
    padding: 30px 5px 20px;
  }
`;

export const Element = styled.h3`
  color: ${theme.text.default};
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;
`;

export const ElementDescription = styled.p`
  color: ${theme.text.secondary};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
`;

// 診断ページへのリンク
export const AnalysisLink = styled(Link)`
  align-items: center;
  background-color: ${theme.colors.pink};
  border-radius: 8px;
  color: ${theme.text.reverse};
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 24px;
  padding: 16px;
  text-decoration: none;
`;

export default Home;

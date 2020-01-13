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
      <TestLink to="/question">
        <span>診断する！</span>
      </TestLink>

      <TestLink to="/counter">
        <span>Counter</span>
      </TestLink>
    </Section>
  );
};

// Section
const Section = styled.div`
  align-items: center;
  background-color: ${theme.bg.default};
  color: ${theme.text.default};
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  position: relative;
  justify-content: center;
`;

const Content = styled.div`
  flex-direction: column;
  display: flex;
  flex: auto;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 100vw;
`;

const Text = styled.div`
  margin: 20px 32px 20px 32px;
  text-align: left;
  align-items: flex-start;
  z-index: 2;

  position: relative;

  @media (max-width: ${MOBILE_BREAK}px) {
    margin-top: 0;
    margin-bottom: 16px;
    text-align: center;
    align-items: center;
  }

  @media (max-width: 1200px) {
    right: 0;
  }
`;

const Tagline = styled.h2`
  color: ${theme.text.default};
  font-weight: 900;
  font-size: 40px;
  margin-top: 16px;
  margin-bottom: 32px;
  text-align: center;

  @media (max-width: ${MOBILE_BREAK}px) {
    font-size: 24px;
  }
`;

const ThisCopy = styled.p`
  color: ${theme.text.default};
  font-size: 18px;
  line-height: 1.6;
  font-weight: 500;
  max-width: 580px;
  margin: 0;
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
  display: flex;
  justify-self: center;
  margin: auto;
  flex-direction: column;
  padding: 26px;
  background-color: ${theme.bg.default};
  border: 3px solid ${theme.colors.pink};
  border-radius: 8px;
  max-width: 480px;
  z-index: 1;

  // 580 - 16*2
  @media (max-width: 548px) {
    max-width: 100%;
    padding: 15px 10px 15px;
    margin: 0 8px;
  }
`;

export const Elements = styled.div`
  display: grid;
  max-width: 100%;
  padding: 30px 5% 30px;
  grid-template-columns: minmax(400, auto) minmax(400, auto) minmax(400, auto);
  grid-template-areas: 'one two three';
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  justify-content: center;
  justify-items: stretch;

  > div {
    min-width: 280px;
    margin: 0;
    justify-content: space-between;

    &:first-of-type {
      justify-self: center;
    }
  }

  @media (max-width: 1334px) {
    padding: 30px 5px 20px;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content min-content;
    grid-template-areas: 'one' 'two' 'three';
    grid-row-gap: 32px;
  }
`;

export const Element = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.text.default};
  margin-bottom: 8px;
  text-align: center;
`;

export const ElementDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${theme.text.secondary};
  line-height: 1.3;
`;

// 診断ページへのリンク
export const TestLink = styled(Link)`
  background-color: ${theme.colors.pink};
  color: ${theme.text.reverse};
  align-items: center;
  border-radius: 8px;
  margin: 24px 0 24px;
  padding: 16px;
  font-weight: 700;
  text-decoration: none;
`;

export default Home;

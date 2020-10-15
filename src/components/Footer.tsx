import React, { ReactNode } from 'react';
import styled from 'styled-components';
import ImportRight from '@/assets/svg/footer-right.svg';
import ImportLeft from '@/assets/svg/footer-left.svg';
import ImportCenter from '@/assets/svg/footer-wave.svg';
import { variables } from '@/styles/variables';

const FooterRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 40% 1fr;
  grid-template-rows: 1fr 1fr;
  height: 12vw;
`;

const LeftContainer = styled.div`
  grid-row: 1 /3;
  grid-column: 1 /2;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
`;

const LeftSVG = styled(ImportLeft)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CenterContainer = styled.div`
  grid-row: 2/3;
  grid-column: 1 /4;
  width: 100%;
  height: 100%;
  position: relative;
`;

const CenterSVG = styled(ImportCenter)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  path {
    fill: ${variables.colors.footer}
  }
`;

const RightContainer = styled.div`
  grid-row: 1 /3;
  grid-column: 3;
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  z-index: 2;
`;

const RightSVG = styled(ImportRight)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Footer = () => (
  <FooterRoot>
    <LeftContainer>
      <LeftSVG />
    </LeftContainer>
    <CenterContainer>
      <CenterSVG />
    </CenterContainer>
    <RightContainer>
      <RightSVG />
    </RightContainer>
  </FooterRoot>
);

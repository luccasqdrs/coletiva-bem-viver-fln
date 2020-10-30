import React, { ReactNode } from 'react';
import styled from 'styled-components';
import ImportLogo from '@/assets/svg/coletiva-logo.svg';
import ImportWave from '@/assets/svg/header-wave.svg';
import { variables } from '@/styles/variables';
import { Social } from './Social';

const HeaderRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
  grid-template-rows: repeat(3, 20px);
  @media (min-width: 700px) {
    grid-template-columns: 1fr 200px 1fr;
    grid-template-rows: repeat(3, 30px);
  }
`;

const LogoContainer = styled.div`
  grid-column: 2;
  grid-row: 1 / 4;
  justify-self: center;
  align-self: center;
  display: block;
  position: relative;
  width: 100%;
  height: 80%;
  z-index: 2;
`;
const WaveContainer = styled.div`
  grid-column: 1 / 4;
  grid-row: 3;
  display: block;
  position: relative;
  width: 100%;
  height: 120%;
  z-index: 1;
`;

const Logo = styled(ImportLogo)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 8px;
`;

const Wave = styled(ImportWave)`
  path {
    fill: ${variables.colors.header};
  }
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
`;

const Background = styled.div`
  grid-column: 1 /4;
  grid-row: 1/ 3;
  background: ${variables.colors.header};
  color: ${variables.colors.header};
  z-index: 2;
`;

export const Header: React.FC = () => (
  <HeaderRoot>
    <Background>&nbsp;</Background>
    <LogoContainer>
      <Logo />
    </LogoContainer>
      <Social />
    <WaveContainer>
      <Wave />
    </WaveContainer>
  </HeaderRoot>
);

import React, { ReactNode } from 'react';
import styled from 'styled-components';
import ImportLogo from '@/assets/svg/coletiva-logo.svg';
import ImportWave from '@/assets/svg/header-wave.svg';
import { variables } from '@/styles/variables';
import { Social } from './Social';

const HeaderRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 500px 1fr;
  grid-template-rows: 60px 60px;
`;

const Menu = styled.div`
  display: flex;
`;

const LogoContainer = styled.div`
  grid-column: 2;
  grid-row: 1 / 3;
  justify-self: center;
  align-self: center;
  display: block;
  position: relative;
  width: 100%;
  height: 90%;
  z-index: 2;
`;
const SocialContainer = styled.div`
  width: 220px;
  grid-row: 1;
  grid-column: 3;
  justify-self: center;
  z-index: 2;
`;
const WaveContainer = styled.div`
  grid-column: 1 / 4;
  grid-row: 2;
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
`;

const Background = styled.div`
  grid-column: 1 /4;
  grid-row: 1;
  background-color: ${variables.colors.header};
  z-index: 0;
`;

export const Header: React.FC = () => (
  <HeaderRoot>
    <Background />
    <Menu>
      <div>Início</div>
      <div>Sobre</div>
      <div>Participar</div>
    </Menu>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <SocialContainer>
      <Social />
    </SocialContainer>
    <WaveContainer>
      <Wave />
    </WaveContainer>
  </HeaderRoot>
);

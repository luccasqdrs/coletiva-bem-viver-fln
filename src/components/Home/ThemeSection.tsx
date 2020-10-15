import { variables } from '@/styles/variables';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

const ThemeRoot = styled.div`
  display: flex;
  height: 800px;
  width: 100%;
  position: relative;
  top: -70px;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${variables.colors.header};
`;

export const Theme: React.FC = () => (
  <ThemeRoot>
  </ThemeRoot>
);

import { variables } from '@/styles/variables';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

const ActionRoot = styled.div`
  display: flex;
  background-color: #e8ddce;
  height: 300px;
  width: 100%;
  position: relative;
  top: -70px;
  align-items: center;
  justify-content: space-around;
`;

export const Action: React.FC = () => (
  <ActionRoot>
    <Link to="/sobre">
      <Button which="sobre" />
    </Link>
    <Link to="/participar">
      <Button which="participar" />
    </Link>
    <Link to="/doar">
      <Button which="doar" />
    </Link>
  </ActionRoot>
);

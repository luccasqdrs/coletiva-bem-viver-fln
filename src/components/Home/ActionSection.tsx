import { variables } from '@/styles/variables';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

const ActionRoot = styled.div`
  display: flex;
  background-color: #e8ddce;
  justify-content: space-around;
  a {
    margin: 3%;
    width: 100%;
  }
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

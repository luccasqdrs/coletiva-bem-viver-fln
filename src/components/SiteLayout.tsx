import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Styles } from '@/styles/base';
import { Header } from './Header';
import { Footer } from './Footer';

interface AppLayoutProps {
  children: ReactNode;
}

const Layout = styled.div`
  display: block;

  min-height: 100vh;
`;

export default ({ children }: AppLayoutProps) => (
  <>
    <Styles />
    <Header />
    <Layout>{children}</Layout>
    {/* <Footer /> */}
  </>
);

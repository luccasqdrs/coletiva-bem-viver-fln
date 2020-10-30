import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Styles } from '@/styles/base';
import { Helmet } from 'react-helmet';
import { Header } from './Header';
import { Footer } from './Footer';

interface AppLayoutProps {
  children: ReactNode;
}

const Layout = styled.div`
  display: block;

  min-height: 100vh;
  margin-top: -2em;
`;

export default ({ children }: AppLayoutProps) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Styles />
    <Header />
    <Layout>{children}</Layout>
    <Footer />
  </>
);

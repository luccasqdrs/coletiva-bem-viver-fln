import React from 'react';
import { PageProps } from 'gatsby';

import SiteLayout from '@/components/SiteLayout';
import { Hero } from '@/components/Home/Hero';
import { Action } from '@/components/Home/ActionSection';

const Home: React.FC<PageProps> = () => (
  <SiteLayout>
    <main>
      <Hero />
      <Action />
    </main>
  </SiteLayout>
);

export default Home;

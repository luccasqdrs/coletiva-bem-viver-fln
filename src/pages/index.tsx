import React from 'react';
import { PageProps } from 'gatsby';

import SiteLayout from '@/components/SiteLayout';
import { Hero } from '@/components/Home/Hero';
import { Action } from '@/components/Home/ActionSection';
import { Theme } from '@/components/Home/ThemeSection';

const Home: React.FC<PageProps> = () => (
  <SiteLayout>
    <main>
      <Hero />
      <Action />
      {/* <Theme /> */}
    </main>
  </SiteLayout>
);

export default Home;

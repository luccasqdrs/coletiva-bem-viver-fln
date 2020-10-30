import React from 'react';
import { PageProps } from 'gatsby';

import SiteLayout from '@/components/SiteLayout';
import { Banner } from '@/components/About/Banner';
import { AboutText } from '@/components/About/TextSection';
import { AboutBio } from '@/components/About/BioSection';
import { BioHeader } from '@/components/About/BioHeader';

const Home: React.FC<PageProps> = () => (
  <SiteLayout>
    <Banner />
    <AboutText />
    <BioHeader />
    <AboutBio />
  </SiteLayout>
);

export default Home;

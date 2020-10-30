import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const BannerRoot = styled.div``;

export const Banner: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "sobre-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <BannerRoot>
      <Img fluid={data.imageOne.childImageSharp.fluid} />
    </BannerRoot>
  );
};

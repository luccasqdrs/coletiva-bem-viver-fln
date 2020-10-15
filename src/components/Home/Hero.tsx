import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const HeroRoot = styled.div``;

export const Hero: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <HeroRoot>
      <Img fluid={data.imageOne.childImageSharp.fluid} />
    </HeroRoot>
  );
};

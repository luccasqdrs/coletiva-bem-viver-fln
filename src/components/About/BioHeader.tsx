import { variables } from '@/styles/variables';
import { useStaticQuery, graphql } from 'gatsby';
import ImportWave from '@/assets/svg/bio-wave.svg';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  z-index: 1;
  height: 25vw;
`;
const ImageContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 30%;
  width: 40%;
  z-index: 2;
`;

const Wave = styled(ImportWave)`
  path {
    fill: ${variables.colors.header};
  }
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
`;

export const BioHeader: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      title: file(relativePath: { eq: "quem.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <HeaderContainer>
      <ImageContainer>
        <Img fluid={data.title.childImageSharp.fluid} />
      </ImageContainer>
      <Wave />
    </HeaderContainer>
  );
};

import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

interface ButtonProps {
  which: string;
}

const ButtonRoot = styled.div`
  width: 100%;
  height: 100%;
`;

export const Button: React.FunctionComponent<ButtonProps> = ({ which }) => {
  const data = useStaticQuery(graphql`
    query {
      sobre: file(relativePath: { eq: "sobre.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      doar: file(relativePath: { eq: "doar.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      participar: file(relativePath: { eq: "participar.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <ButtonRoot>
      {(() => {
        switch (which) {
          case `sobre`:
            return (
              <Img
                fluid={data.sobre.childImageSharp.fluid}
                imgStyle={{ objectFit: `contain` }}
              />
            );
          case `participar`:
            return (
              <Img
                fluid={data.participar.childImageSharp.fluid}
                imgStyle={{ objectFit: `contain` }}
              />
            );
          case `doar`:
            return (
              <Img
                fluid={data.doar.childImageSharp.fluid}
                imgStyle={{ objectFit: `contain` }}
              />
            );
          default:
            return <div />;
        }
      })()}
    </ButtonRoot>
  );
};

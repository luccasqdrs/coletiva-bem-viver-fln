import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { variables } from '@/styles/variables';

interface BioProps {
  name: string;
  bio: string;
  imageFluid: any;
  side: string;
}

interface ImageProps {
  side: number;
}

interface TextProps {
  side: string;
}

const BioRoot = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  @media (min-width: 700px) {
    flex-wrap: nowrap;
  }
`;

const TextContainer = styled.div<TextProps>`
  display: relative;
  width: 100%;
  margin-top: 20px;
  h1 {
    margin-bottom: 0;
    text-align: ${(p) => p.side};
    color: ${variables.colors.background};
  }
  p {
    text-align: ${(p) => p.side};
  }
`;
const ImageContainer = styled.div<ImageProps>`
  align-self: center;
  justify-self: center;
  @media (min-width: 700px) {
    width: 400px;
    margin: 0 80px;
    order: ${(p) => p.side};
  }
  width: 200px;
`;

export const Bio: React.FC<BioProps> = ({
  name,
  bio,
  imageFluid,
  side,
}: BioProps) => (
  <BioRoot>
    <ImageContainer side={side === 'right' ? 1 : -1}>
      <Img fluid={imageFluid} />
    </ImageContainer>
    <TextContainer side={side}>
      <h1>{name}</h1>
      <p>{bio}</p>
    </TextContainer>
  </BioRoot>
);

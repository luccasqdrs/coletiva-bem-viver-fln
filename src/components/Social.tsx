import React from 'react';
import styled from 'styled-components';
import ImportFacebook from '@/assets/svg/facebook.svg';
import ImportInstagram from '@/assets/svg/instagram.svg';
import ImportTwitter from '@/assets/svg/twitter.svg';
import ImportYT from '@/assets/svg/youtube.svg';

const SocialRoot = styled.div`
  display: flex;
  margin: 5px 5px;
  grid-row: 1/3;
  grid-column: 3;
  z-index: 2;
  justify-content: right;
`;
const ButtonContainer = styled.div`
  margin: 0px 1%;
  svg {
    height: 100%;
    width: 100%;
  }
`;

export const Social: React.FC = () => {
  const data = [
    {
      icon: ImportFacebook,
      url: 'https://facebook.com/coletivabemviverfloripa',
    },
    {
      icon: ImportInstagram,
      url: 'https://instagram.com/coletivabemviverfloripa',
    },
    {
      icon: ImportTwitter,
      url: 'https://twitter.com/ColetivaBVFLN',
    },
    {
      icon: ImportYT,
      url: 'https://www.youtube.com/channel/UCNtrqCwHYGz-7cSwIIoH6aw',
    },
  ];

  return (
    <SocialRoot>
      {data.map((social) => (
        <ButtonContainer key={social.url}>
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <social.icon />
          </a>
        </ButtonContainer>
      ))}
    </SocialRoot>
  );
};

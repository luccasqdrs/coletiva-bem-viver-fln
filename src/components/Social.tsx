import React from 'react';
import styled from 'styled-components';
import ImportFacebook from '@/assets/svg/facebook.svg';
import ImportInstagram from '@/assets/svg/instagram.svg';
import ImportTwitter from '@/assets/svg/twitter.svg';
import ImportYT from '@/assets/svg/youtube.svg';


const SocialRoot = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;
const ButtonContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
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

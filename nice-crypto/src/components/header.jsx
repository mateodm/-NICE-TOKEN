import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1vh 6vh;
  margin-bottom: 15vh;
  border-bottom: 0.5px solid #f4f4f4;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 5vh;
    align-items: center;
    padding: 1vh 2vh;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 1vh;
    margin-left: 20px;
    justify-content: center;
  }
`;

const LogoImg = styled.img`
  margin-left: 1%;
  height: 5.6vh;
  width: auto;

  &:hover {
    opacity: 0.65;
  }
`;

const LogoText = styled.span`
  font-size: 0.95em;
  color: white;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 1vh;
  }
`;

const SocialImg = styled.img`
  height: 6.3vh;
  width: auto;

  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImg src="./images/logo.png" alt="Nice Logo" />
        <LogoText>Nice</LogoText>
      </LogoContainer>
      <SocialContainer>
        <a href="https://t.me/nicetokenbase" target="_blank" rel="noopener noreferrer"><SocialImg src="./images/telegram.png" alt="Telegram" /></a>
        <a href="https://x.com/Nicetokenbase" target="_blank" rel="noopener noreferrer"><SocialImg src="./images/x.png" alt="X - Twitter" /></a>
        <a href="https://warpcast.com/nicetoken" target="_blank" rel="noopener noreferrer"><SocialImg src="./images/warpcast.png" alt="Warpcast" /></a>
      </SocialContainer>
    </HeaderContainer>
  );
};

export default Header;

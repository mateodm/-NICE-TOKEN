import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
  margin-top: 6vh;
  margin-bottom: 20vh;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    align-items: center;
  }

  @media (max-width: 767px) {
    padding: 1rem;
    margin: 0;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 2rem;
  box-sizing: border-box;
  max-width: 100%;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 100%;
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  max-width: 800px;

  .carousel-indicators {
    display: none;
  }

  @media (max-width: 767px) {
    width: 100%;
    .carousel-item {
      display: none;
    }
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  div {
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      margin-right: 1rem;
      margin-bottom: 0;
    }
  }
`;

const ContractButton = styled.button`
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: #93f514;

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: auto;
  }

  &:hover {
    background-color: #93f514;
    opacity: 0.8;
  }
`;

const Button = styled.button`
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
  background-color: ${props => props.bgColor};

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: auto;
  }

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

const Icon = styled.span`
  margin-right: 0.5rem;
  display: inline-block;

  img {
    width: 30px;
    height: 30px;
  }
`;

const MainSection = () => {
  return (
    <MainContainer>
      <TextContainer>
        <h1>We can have something <span className="token_text">$NICE</span></h1>
        <p>
        We can have something $NICE A Nice coin, without rugs, without team sniping supply, without scammers, and for a long run, join $nice community and let's go to the fren paradise! 
        </p>
        <ContractButton>
          CA: 0xBf4Db8b7A679F89Ef38125d5F84dd1446ASD343242343242344
        </ContractButton>
        <FeaturesList>
          <div>
            <Button bgColor="#0088cc" hoverColor="#007bb5">
              <Icon><img src="/images/telegram.png" alt="Telegram" /></Icon><a class="media-href" href="https://t.me/nicetokenbase" target="_blank" style={{color: 'white'}}>Join to Telegram</a>
            </Button>
          </div>
          <div>
            <Button bgColor="#6a0dad" hoverColor="#5c0cb1">
              <Icon><img src="/images/warpcast.png" alt="Warpcast" /></Icon><a class="media-href" href="https://warpcast.com/nicetoken" target="_blank" style={{color: 'white'}}>Follow in Warpcast</a>
            </Button>
          </div>
          <div>
            <Button bgColor="black" hoverColor="black">
              <Icon><img src="/images/x.png" alt="Twitter" /></Icon><a class="media-href" href="https://x.com/Nicetokenbase" target="_blank" style={{color: 'white'}}>Follow in Twitter</a>
            </Button>
          </div>
        </FeaturesList>
      </TextContainer>
      <ImageContainer>
        <StyledCarousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/meme2.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/meme3.png"
              alt="Second slide"
            />
          </Carousel.Item>
        </StyledCarousel>
      </ImageContainer>
    </MainContainer>
  );
};

export default MainSection;

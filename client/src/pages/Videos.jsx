import React from "react";
import {
  Container,
  Content,
  Recommendations,
  VideoWrapper,
  Title,
  Details,
  Info,
  Button,
  ButtonsWrapper,
} from "./videos";
const Videos = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GhclOjt7d2U?si=ZCDQU_d7inqSyIzr"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>She Swallowed Burning Coals</Title>
        <Details>
          <Info>792,300 views * Jan 22, 2016</Info>
          <ButtonsWrapper>
            <Button>button</Button>
            <Button>button</Button>
          </ButtonsWrapper>
        </Details>
      </Content>
      <Recommendations>Recommendations</Recommendations>
    </Container>
  );
};

export default Videos;

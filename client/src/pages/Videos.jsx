import React from "react";
import {
  Container,
  Content,
  Recommendations,
  VideoWrapper,
  Title,
} from "./videos";
const Videos = () => {
  return (
    <Container>
      <VideoWrapper>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=rg1RoU0HF8pBSl3P"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </VideoWrapper>
      <Content>content</Content>
      <Recommendations>Recommendations</Recommendations>
    </Container>
  );
};

export default Videos;

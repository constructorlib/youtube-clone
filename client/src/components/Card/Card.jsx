import React from "react";
import Thumbnail from "../../img/thumbnail.jpg";
import {
  Container,
  Image,
  Details,
  ChannelImage,
  Texts,
  ChannelName,
  Info,
  Title,
} from "./card";
const Card = () => {
  return (
    <Container>
      <Image src={Thumbnail} />
      <Details>
        <ChannelImage />
        <Texts>
          <Title>Test Video</Title>
          <ChannelName>Constructorlib</ChannelName>
          <Info>500 views, 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
  );
};

export default Card;

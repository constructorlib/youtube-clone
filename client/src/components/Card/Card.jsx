import React from "react";
import Thumbnail from "../../img/thumbnail.jpg";
import { Container, Image, Details, ChannelImage } from "./card";
const Card = () => {
  return (
    <Container>
      <Image src={Thumbnail} />
      <Details>
        <ChannelImage />
      </Details>
    </Container>
  );
};

export default Card;

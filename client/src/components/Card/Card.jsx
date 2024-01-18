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
import { Link } from "react-router-dom";
const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image src={Thumbnail} type={type} />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://i.pinimg.com/474x/a8/8a/49/a88a49dadce4b16fb109f3aea6ce446b.jpg"
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Constructorlib</ChannelName>
            <Info>500 views, 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;

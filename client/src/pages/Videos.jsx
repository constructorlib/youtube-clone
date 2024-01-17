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
  Hr,
  Channel,
  ChannelInfo,
  Subscribe,
  Image,
  ChannelDetails,
  ChannelCounter,
  Description,
  ChannelName,
} from "./videos";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments/Comments";
const Videos = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/GhclOjt7d2U?si=ZCDQU_d7inqSyIzr"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>She Swallowed Burning Coals</Title>
        <Details>
          <Info>792,300 views Jan 22, 2016</Info>
          <ButtonsWrapper>
            <Button>
              <ThumbUpOutlinedIcon />
              123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon />0
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon />
              Save
            </Button>
          </ButtonsWrapper>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://i.pinimg.com/474x/a8/8a/49/a88a49dadce4b16fb109f3aea6ce446b.jpg" />
            <ChannelDetails>
              <ChannelName>constructorlib</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis iure perferendis natus libero obcaecati ratione quam
                quae nam placeat odit aspernatur harum, repellendus impedit vel
                ipsum optio assumenda culpa ipsam.
              </Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendations>Recommendations</Recommendations>
    </Container>
  );
};

export default Videos;

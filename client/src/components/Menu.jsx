import React from "react";
import LamaTube from "../img/logo.png";
import {
  Container,
  Wrapper,
  Logo,
  Img,
  Item,
  Hr,
  Login,
  Button,
  Title,
} from "./menu";
import {
  HomeIcon,
  ExploreOutlinedIcon,
  SubscriptionsOutlinedIcon,
  VideoLibraryOutlinedIcon,
  HistoryOutlinedIcon,
  LibraryMusicOutlinedIcon,
  SportsEsportsOutlinedIcon,
  SportsBasketballOutlinedIcon,
  MovieOutlinedIcon,
  ArticleOutlinedIcon,
  LiveTvOutlinedIcon,
  AccountCircleOutlinedIcon,
  SettingsOutlinedIcon,
  FlagOutlinedIcon,
  HelpOutlineOutlinedIcon,
  SettingsBrightnessOutlinedIcon,
} from "../utils/muiIcons";

import { Link } from "react-router-dom";
const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={LamaTube} />
          LamaTube
        </Logo>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Login>
        <Hr />
        <Title>BEST OF LAMATUBE</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;

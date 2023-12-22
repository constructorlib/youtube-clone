import React from "react";
import { Button, Input, Search, Wrapper, Container } from "./navbar";
import {
  AccountCircleOutlinedIcon,
  SearchOutlinedIcon,
} from "../utils/muiIcons";
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

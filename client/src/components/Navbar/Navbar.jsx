import React from "react";
import { Button, Input, Search, Wrapper, Container } from "./navbar";
import {
  AccountCircleOutlinedIcon,
  SearchOutlinedIcon,
} from "../../utils/muiIcons";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
        <Link to="/signin" style={{ textDecoration: "none", color: "inherit" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

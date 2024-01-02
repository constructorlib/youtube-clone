import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Router>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="video">
                    <Route path=":id" element={<Videos />} />
                  </Route>
                </Route>
              </Routes>
            </Router>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

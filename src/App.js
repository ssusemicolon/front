import { useEffect } from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";

import { DashboardPage } from "./page/Dashboard";
import { DetailPage } from "./page/DetailBoard";

const Wrapper = styled.div`
  background-color: white;
  border: none;
  min-height: calc(var(--vh, 1vh) * 100);
  max-width: var(--app-max-width, 768px);
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const App = () => {
  const setScreenSize = () => {
    // vh 관련
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // window width 관련
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const maxWidth = Math.min(768, windowWidth);
    document.documentElement.style.setProperty(
      "--app-max-width",
      `${maxWidth}px`,
    );
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize);

    return () => {
      window.removeEventListener("resize", setScreenSize);
    };
  }, []);

  return (
    <Wrapper className="App">
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
      </Routes>
    </Wrapper>
  );
};

export default App;

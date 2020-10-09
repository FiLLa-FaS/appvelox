import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import First from "./First";
import Second from "./Second";
import { Header, NavAside } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <NavAside />
        <Content>
          <Header />
          <Switch>
            <Route path="/" exact component={First} />
            <Route path="/orders" component={Second} />
          </Switch>
        </Content>
      </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  font-family: "Rubik", Arial, Helvetica, sans-serif;
  height: 100%;
`;

const Content = styled.div`
  margin-left: 190px;
  height: 100%;
`;

export default App;

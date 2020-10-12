import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ViewAccount from "./ViewAccount";
import ViewOrders from "./ViewOrders";
import { Header, NavAside } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
      <Aside>
      <NavAside />
      </Aside>
        <NavAside />
        <Content>
          <Header />
          <Switch>
            <Route path="/" exact component={ViewAccount} />
            <Route path="/orders" component={ViewOrders} />
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

const Aside = styled.aside`

`;

const Content = styled.div`
  margin-left: 190px;
  height: 100%;
`;

export default App;

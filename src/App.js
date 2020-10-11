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
        {/* Не хватает семантической верстки. <aside></aside>. Для навигации используй <nav></nav> */}
        {/* NavAside это именно навигация. А что, если у нас в левой колонке будет что-то, что к навигации не относится? Нужна обертка. */}
        <NavAside />
        <Content>
          <Header />
          <Switch>
            {/* Неудачные названия для страниц. Ни First, ни Second мне ни о чем не говорят. Особенно когда видно, что path=orders. */}
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

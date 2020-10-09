import React from "react";
import styled from "styled-components";
import { Scrollbar, CardOrder } from "../..";

const WidgetScroll = ({ orders }) => {
  return (
    <Wrapper>
      <Scrollbar style={{ width: "100%" }}>
        {orders.map((order, i) => {
          return <CardOrder key={i} order={order} className="card-order" />;
        })}
      </Scrollbar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
height: 100%;
  .card-order + .card-order {
    margin-top: 15px;
  }
`;

export default WidgetScroll;

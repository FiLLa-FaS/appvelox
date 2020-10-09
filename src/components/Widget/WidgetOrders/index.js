import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CardOrder } from "../..";

const WidgetOrders = ({ orders }) => {
  const valueLimit = 2;

  const showOrders = (limit) => {
    if (orders.length > limit) {
      const newOrders = orders.slice(0, 2);
      return newOrders.map((order, i) => {
        return <CardOrder key={i} order={order} />;
      });
    }
    orders.map((order, i) => {
      return <CardOrder key={i} order={order} />;
    });
  };
  return (
    <Wrapper>
      <Grid>{showOrders(valueLimit)}</Grid>
      <More>
        <MoreTitle>Еще {orders.length - valueLimit} записи</MoreTitle>
        <MoreLink>
          <NavLink to={"/orders"}>Подробнее</NavLink>
        </MoreLink>
      </More>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0;
  align-items: center;
`;

const Grid = styled.div`
  grid-column: span 10;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-left: 20px;
`;

const More = styled.div`
  grid-column: span 2;
  margin-left: 20px;
`;

const MoreTitle = styled.h3`
  margin: 0;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

const MoreLink = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  text-decoration-line: underline;
  color: #50caff;

  & a {
    color: #50caff;
  }
`;

export default WidgetOrders;

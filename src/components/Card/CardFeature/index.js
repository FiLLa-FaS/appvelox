import React from "react";
import styled from "styled-components";

const CardFeature = ({ feature }) => {
  return (
    <Card className={`${feature.active ? "active" : ""}`}>
      <CardIcon>
        <Icon>{feature.icon}</Icon>
      </CardIcon>
      <CardInfo>
        <Title>{feature.title}</Title>
        <List>
        {feature.content.map((item, i) => {
          return <ListItem key={i}>{item}</ListItem>;
        })}
        </List>
      </CardInfo>
    </Card>
  );
};

const Card = styled.div`
  max-width: 540px;
  display: grid;
  grid-template-columns: 133px 3fr;
  background: #ffffff;
  border: 2px solid transparent;
  box-shadow: 0px 0px 5px #ebe7ff;
  border-radius: 5px;
  box-sizing: content-box;

  &.active {
    border: 2px solid #50caff;
  }
`;

const CardIcon = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  .active & {
    background-color: #50caff;
  }
`;

const Icon = styled.div`
  & path {
    fill: #ebe7ff;
    stroke: transparent;

    .active & {
      fill: #fff;
      stroke: #50caff;
    }
  }
`;

const CardInfo = styled.div`
  padding: 20px 36px;
`;

const Title = styled.h2`
  margin: 0;
  padding-bottom: 8px;
  border-bottom: 2px solid #ebe7ff;
  white-space: nowrap;
  font-family: Rubik;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  color: #000000;

  .active & {
    border-bottom: 2px solid #50caff;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 15px 0 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  .active & {
    &::before {
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background-color: #50caff;
      content: "";
      margin-right: 11px;
    }
  }
`;

export default CardFeature;

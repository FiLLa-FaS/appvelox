import React from "react";
import styled from "styled-components";
import { format } from 'date-fns'
import ru from "date-fns/locale/ru";
import { UiButton } from "../..";
import capitalize from '../../../helpers/capitalize'

const CardOrder = ({ order, className }) => {
  const showDate = () => {
    return capitalize(format(order.date, 'EEEE dd.MM.yy | HH:mm', {locale: ru}))
  };

  return (
    <Card className={className}>
      <Date>{showDate()} </Date>
      <Address>{order.address}</Address>
      <Row>
        <Person>
          <PersonImg src={order.doctorImg} />
          <PersonInfo>
            <PersonName>{order.doctorName}</PersonName>
            <PersonCareer>{order.doctorCareer}</PersonCareer>
          </PersonInfo>
        </Person>
        <UiButton>Отменить</UiButton>
      </Row>
    </Card>
  );
};

const Card = styled.div`
  max-width: 475px;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 0px 5px #ebe7ff;
  border-radius: 5px;
`;

const Date = styled.h2`
  margin: 0;
  font-family: Rubik;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const Address = styled.p`
  max-width: 300px;
  margin: 5px 0 0;
  font-family: Rubik;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 10px;
`;

const Person = styled.div`
  display: flex;
  align-items: center;
`;

const PersonImg = styled.img`
  max-width: 60px;
  max-height: 60px;
  border-radius: 30px;
`;

const PersonInfo = styled.div`
  margin-left: 10px;
`;

const PersonName = styled.h3`
  margin: 0;
  font-family: Rubik;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

const PersonCareer = styled.p`
  margin: 5px 0 0;
  font-family: Rubik;
  font-size: 14px;
  line-height: 17px;
  color: #ebe7ff;
`;

export default CardOrder;
